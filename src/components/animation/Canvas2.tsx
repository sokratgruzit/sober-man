import { useEffect, useRef } from "react";

import { useAppStore } from "../../store/useAppStore";
import { clamp, parseColor, randomPhase } from "../../utils/utils";
import type { TriangleData } from "../../utils/objects";
import { getTrianglesData } from "../../utils/objects";

import styles from "./Canvas.module.css";

export const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trianglesRef = useRef<TriangleData[]>([]);
    const { setIntro, intro, setWindowWidth, currentSection, explore } = useAppStore();

    const createTriangles = () => {
        const centerX = 0; // стартовая точка падения — центр (0,0)
        const centerY = 0;

        trianglesRef.current = getTrianglesData(currentSection, explore).map((t) => ({
            ...t,
            phase: randomPhase(),
            startX: centerX,
            startY: centerY,
            scatterX: (Math.random() - 0.5) * 1500,
            scatterY: (Math.random() - 0.5) * 1500,
            z: -3,
        }));
    };

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        const BASE_WIDTH = 750;
        const BASE_HEIGHT = 740;

        const center = () => ({
            x: canvas.width / 2,
            y: canvas.height / 2,
        });

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createTriangles();
            setWindowWidth(window.innerWidth);
        }

        resize();

        let startTime: number | null = null;
        let frameId: number;

        const APPEAR_DURATION = 1.2;  // время падения и появления
        const SCATTER_DURATION = 0.7; // время разлёта
        const WAIT_DURATION = 1.5;    // время задержки в разлёте (чтобы треугольники "стояли" на месте)
        const GATHER_DURATION = 1.2;  // время сбора обратно
        const TOTAL_ANIM = APPEAR_DURATION + SCATTER_DURATION + WAIT_DURATION + GATHER_DURATION;

        function draw(elapsed: number) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const scaleX = canvas.width / BASE_WIDTH;
            const scaleY = canvas.height / BASE_HEIGHT;
            const scale = Math.min(scaleX, scaleY);

            const c = center();
                
            for (const t of trianglesRef.current) {
                let localX = t.x;
                let localY = t.y;
                let zScale = 1;

                if (elapsed < APPEAR_DURATION) {
                    // Падение от центра к позиции
                    const appearT = elapsed / APPEAR_DURATION;
                    localX = t.startX + (t.x - t.startX) * appearT;
                    localY = t.startY + (t.y - t.startY) * appearT;
                    zScale = appearT; // масштаб растёт от 0 до 1
                } else if (elapsed < APPEAR_DURATION + SCATTER_DURATION) {
                    // Разлёт
                    const tS = (elapsed - APPEAR_DURATION) / SCATTER_DURATION;
                    localX = t.x + t.scatterX * tS;
                    localY = t.y + t.scatterY * tS;
                    zScale = 1;
                } else if (elapsed < APPEAR_DURATION + SCATTER_DURATION + WAIT_DURATION) {
                    // Остановка в разлёте (ждём)
                    localX = t.x + t.scatterX;
                    localY = t.y + t.scatterY;
                    zScale = 1;
                } else if (elapsed < TOTAL_ANIM) {
                    // Сборка обратно
                    const tG = (elapsed - APPEAR_DURATION - SCATTER_DURATION - WAIT_DURATION) / GATHER_DURATION;
                    const reverse = 1 - tG;
                    localX = t.x + t.scatterX * reverse;
                    localY = t.y + t.scatterY * reverse;
                    zScale = 1;

                    if (intro) setIntro(false);
                } else {
                    // После анимации — плавное колебание
                    const offsetY = Math.sin(elapsed * 2 + t.phase) * scale;
                    localY = t.y + offsetY / scale;
                    localX = t.x;
                    zScale = 1;
                }

                const base = parseColor(t.color);
                const shift = Math.floor(Math.sin(elapsed * 3 + t.phase) * 50);
                const r = clamp(base.r + shift, 0, 255);
                const g = clamp(base.g, 0, 255);
                const b = clamp(base.b, 0, 255);
                ctx.fillStyle = `rgb(${r},${g},${b})`;

                ctx.save();

                ctx.translate(c.x + localX * scale, c.y + localY * scale);
                ctx.scale(zScale, zScale);
                ctx.rotate((t.rotation * Math.PI) / 180);

                ctx.beginPath();
                t.points.forEach((p, i) => {
                    const px = p.x * t.size * scale;
                    const py = p.y * t.size * scale;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                });
                ctx.closePath();
                ctx.fill();

                ctx.restore();
            }
        }

        function animate(time: number) {
            if (!startTime) startTime = time;
            const elapsed = (time - startTime) / 1000;
            draw(elapsed);
            frameId = requestAnimationFrame(animate);
        }

        frameId = requestAnimationFrame(animate);
        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    useEffect(() => {
        createTriangles();
    }, [currentSection, explore]);

    return <canvas ref={canvasRef} className={styles.canvas} />;
};
