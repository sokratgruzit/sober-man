import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./Typing.module.css";

interface TypingTextProps {
    text: string;
    className?: string;
    delayPerChar?: number; // ms
    delayPerWord?: number; // ms
}

export default function Typing({
    text,
    className = "",
    delayPerChar = 0.05,
    delayPerWord = 0.2,
}: TypingTextProps) {
    const [visibleText, setVisibleText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        let cancelled = false;

        const chars = text.split("");
        const timers: ReturnType<typeof setTimeout>[] = [];

        const type = () => {
            if (cancelled || currentIndex >= chars.length) return;

            const char = chars[currentIndex];
            setVisibleText((prev) => prev + char);
            currentIndex++;

            const delay = char === " " ? delayPerWord * 1000 : delayPerChar * 1000;
            timers.push(setTimeout(type, delay));
        };

        timers.push(setTimeout(type, 300)); // initial delay

        return () => {
            cancelled = true;
            timers.forEach(clearTimeout);
        };
    }, [text, delayPerChar, delayPerWord]);

    return (
        <div className={`${styles.typingWrapper} ${className}`}>
            {visibleText}
            <motion.span
                className={styles.cursor}
                animate={{
                opacity: [1, 0],
                }}
                transition={{
                repeat: Infinity,
                duration: 0.7,
                ease: "easeInOut",
                }}
            >
                |
            </motion.span>
        </div>
    );
}
