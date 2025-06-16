import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { useAppStore } from "./store/useAppStore";

import { Navigation } from "./components/navigation/Navigation";
import { Settings } from "./components/settings/Settings";
import { Canvas } from "./components/animation/Canvas";
import Button from "./components/ui/button/Button";
import SectionIntro from "./components/sections/SectionIntro";
import Section0 from "./components/sections/Section0";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import BackgroundMusic from "./components/music/BackgroundMusic";

import styles from "./App.module.css";

export default function App() {
  const colors = ["#98BFF6", "#EDB948", "#63C5AB", "#F4696B", "#EF9F64", "#64d6e2", "#FDAED4", "#785ebb"];

  const { 
    explore, 
    setExplore, 
    intro, 
    currentSection, 
    setStartMusic,
    setSection
  } = useAppStore();

  const isThrottledRef = useRef(false);
  const currentSectionRef = useRef(currentSection);

  const handleExplore = () => {
    setExplore(true);
    setStartMusic(true);
  };

  const renderSection = () => {
    if (!explore && !intro) return <SectionIntro key="intro" />;
    if (explore && !intro && currentSection === 0) return <Section0 key="section0" />;
    if (explore && !intro && currentSection === 1) return <Section1 key="section1" />;
    if (explore && !intro && currentSection === 2) return <Section2 key="section2" />;
    return null;
  };

  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  useEffect(() => {
    const changeSection = (direction: "up" | "down") => {
      if (isThrottledRef.current) return;
      if (intro && !explore) return;

      isThrottledRef.current = true;

      let timeout = setTimeout(() => {
        isThrottledRef.current = false;
        clearTimeout(timeout);
      }, 1000); 

      if (direction === "up" && currentSection < 7) {
        setSection(currentSection + 1);
      }
      
      if (direction === "down" && currentSection !== 0) {
        setSection(currentSection - 1);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && explore) changeSection("up");
      else if (e.deltaY < 0 && explore) changeSection("down");
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffY) > 50 && explore) {
        if (diffY > 0) changeSection("up");
        else changeSection("down");
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [setSection, currentSection, intro, explore]);

  return (
    <div className={styles.container} style={{ background: !explore ? "#111" : colors[currentSection] }}>
      <BackgroundMusic src="/audio/awakening.mp3" />
      <img src="sober3.jpg" alt="proto" className={styles.img} />
      <Canvas />
      {explore && !intro && <Navigation />}
      {explore && !intro && <Settings />}
      <AnimatePresence mode="wait">
        {renderSection() && (
          <motion.div
            key={currentSection + (explore ? "-explore" : "-intro")} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ width: "100%" }}
          >
            {renderSection()}
          </motion.div>
        )}
      </AnimatePresence>
      {!explore && !intro && (
        <Button
          text="Начать исследование"
          onClick={handleExplore}
          size={window.innerWidth < 768 ? "medium" : "large"}
          borderColor="#D32F2F"
          left={window.innerWidth < 768 ? "calc(50% - 100px)" : "calc(50% - 120px)"}
          top="calc(100% - 100px)"
          delay={11}
        />
      )}
    </div>
  );
}
