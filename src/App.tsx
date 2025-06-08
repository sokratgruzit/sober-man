import { useAppStore } from "./store/useAppStore";

import { Navigation } from "./components/navigation/Navigation";
import { Canvas } from "./components/animation/Canvas";
import Button from "./components/ui/button/Button";

import styles from "./App.module.css";

export default function App() {
  const { explore, setExplore, intro } = useAppStore();

  const handleExplore = () => {
    setExplore(true);
  };

  return (
    <div className={styles.container}>
      <Canvas />
      {explore && !intro && <Navigation />}
      {!explore && !intro && <Button
        text="Начать исследование"
        onClick={handleExplore}
        size="large"
        borderColor="#D32F2F"
      />}
    </div>
  );
}
