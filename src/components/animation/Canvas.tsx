import { useEffect, useRef } from "react";

import { clamp, parseColor, randomPhase } from "../../utils/utils";
import type { TriangleData } from "../../utils/objects";
import { trianglesData, getTrianglesData } from "../../utils/objects";

import styles from "./Canvas.module.css";

export const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trianglesRef = useRef<TriangleData[]>([]);

    useEffect(() => {
        const createTriangles = () => {
            trianglesRef.current = getTrianglesData().map((t) => ({
                ...t,
                phase: randomPhase(),
            }));
        };

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        // Базовый размер под который изначально рассчитывались координаты
        const BASE_WIDTH = 750;
        const BASE_HEIGHT = 740;

        // Установка размеров canvas под текущий экран
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createTriangles();
        }

        createTriangles();
        resize();

        // Центр холста
        function getCenter() {
            return {
                x: canvas.width / 2,
                y: canvas.height / 2,
            };
        }

        let startTime: number | null = null;
        let frameId: number;

        function draw(elapsed: number) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Вычисляем масштаб по ширине и высоте и берем минимальный для сохранения пропорций
            const scaleX = canvas.width / BASE_WIDTH;
            const scaleY = canvas.height / BASE_HEIGHT;
            const scale = Math.min(scaleX, scaleY);

            const center = getCenter();

            for (const t of trianglesRef.current) {
                const { x, y, size, rotation, points, color, phase } = t;

                // Смещение по Y тоже масштабируем
                const offsetY = Math.sin(elapsed * 2 + phase) * 3 * scale;

                const base = parseColor(color);
                const shift = Math.floor(Math.sin(elapsed * 3 + phase) * 50);
                const r = clamp(base.r + shift, 0, 255);
                const g = clamp(base.g, 0, 255);
                const b = clamp(base.b, 0, 255);
                ctx.fillStyle = `rgb(${r},${g},${b})`;

                ctx.save();

                // Смещаем позицию с учетом масштаба
                ctx.translate(center.x + x * scale, center.y + y * scale + offsetY);
                ctx.rotate((rotation * Math.PI) / 180);

                ctx.beginPath();
                points.forEach((p, i) => {
                    const px = p.x * size * scale;
                    const py = p.y * size * scale;
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

        // Поддержка ресайза окна
        function onResize() {
            resize();
        }

        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
};