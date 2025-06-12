import { useEffect, useRef } from "react";
import { useAppStore } from "../../store/useAppStore";
import { clamp, parseColor, randomPhase } from "../../utils/utils";
import type { TriangleData } from "../../utils/objects";
import { getTrianglesData } from "../../utils/objects";
import styles from "./Canvas.module.css";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trianglesRef = useRef<TriangleData[]>([]);
  const { setIntro, setWindowWidth, currentSection, explore } = useAppStore();

  const BASE_WIDTH = 750;
  const BASE_HEIGHT = 740;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const center = () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
    });

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setWindowWidth(window.innerWidth);
    }

    resize();
    window.addEventListener("resize", resize);

    let startTime: number | null = null;
    let frameId: number;

    function draw(elapsed: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scaleX = canvas.width / BASE_WIDTH;
      const scaleY = canvas.height / BASE_HEIGHT;
      const scale = Math.min(scaleX, scaleY);
      const c = center();

      for (const t of trianglesRef.current) {
        // Интерполяция позиций
        t.x = lerp(t.x, t.targetX ?? t.x, 0.05);
        t.y = lerp(t.y, t.targetY ?? t.y, 0.05);
        t.rotation = lerp(t.rotation, t.targetRotation ?? t.rotation, 0.05);

        const targetColor = parseColor(t.targetColor ?? t.color);
       
        const shift = Math.floor(Math.sin(elapsed * 3 + t.phase) * 50);
        const r = clamp(targetColor.r + shift, 0, 255);
        const g = clamp(targetColor.g, 0, 255);
        const b = clamp(targetColor.b, 0, 255);
        ctx.fillStyle = `rgb(${r},${g},${b})`;

        // Колебание
        const offsetY = Math.sin(elapsed * 2 + t.phase) * 3 * scale;
        const drawX = t.x;
        const drawY = t.y + offsetY / scale;

        ctx.save();
        ctx.translate(c.x + drawX * scale, c.y + drawY * scale);
        ctx.rotate((t.rotation * Math.PI) / 180);

        // Интерполяция точек (если есть)
        const currentPoints = t.points;
        const targetPoints = t.targetPoints ?? currentPoints;
        const points = currentPoints.map((p, i) => {
          const tp = targetPoints[i] || p;
          return {
            x: lerp(p.x, tp.x, 0.05),
            y: lerp(p.y, tp.y, 0.05),
          };
        });
        t.points = points;

        ctx.beginPath();
        points.forEach((p, i) => {
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

    setTimeout(() => setIntro(false), 2000)

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const { target } = getTrianglesData(currentSection, explore);

    for (let i = 0; i < trianglesRef.current.length; i++) {
      const triangle = trianglesRef.current[i];
      const targetTriangle = target[i];
      if (!targetTriangle) continue;

      triangle.targetX = targetTriangle.x;
      triangle.targetY = targetTriangle.y;
      triangle.targetRotation = targetTriangle.rotation;
      triangle.targetColor = targetTriangle.color;
      triangle.targetPoints = targetTriangle.points;
    }

    // Добавляем новые
    for (let i = trianglesRef.current.length; i < target.length; i++) {
      const t = target[i];
      trianglesRef.current.push({
        ...t,
        phase: randomPhase(),
        targetX: t.x,
        targetY: t.y,
        targetRotation: t.rotation,
        targetColor: t.color,
        targetPoints: t.points,
      });
    }
  }, [currentSection, explore]);

  useEffect(() => {
    const { mutated, target } = getTrianglesData(currentSection, explore);

    trianglesRef.current = mutated.map((t, i) => {
      const targetTriangle = target[i];
      return {
        ...t,
        phase: randomPhase(),
        targetX: targetTriangle.x,
        targetY: targetTriangle.y,
        targetRotation: targetTriangle.rotation,
        targetColor: targetTriangle.color,
        targetPoints: targetTriangle.points,
      };
    });
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};
