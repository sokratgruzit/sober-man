import type { TriangleData } from "../types";

import { soberWord } from "./soberWord";
import { laptop } from "./laptop";

export function getTrianglesData(section: number, explore: boolean): {
  mutated: Omit<TriangleData, "phase">[];
  target: Omit<TriangleData, "phase">[];
} {
  const width = window.innerWidth > 1150 ? window.innerWidth : 950;
  const height = window.innerWidth > 1150 ? window.innerHeight : 740;
  const baseWidth = 1150;
  const baseHeight = 740;
  const scaleX = width / baseWidth;
  const scaleY = height / baseHeight;
  const scale = Math.min(scaleX, scaleY);

  function scalePoint(point: { x: number; y: number }) {
    return { x: point.x * scale, y: point.y * scale };
  }

  const distance = 1500;
  let base = soberWord;

  if (explore && section === 0) {
    base = laptop;
  }

  const target = base.map((triangle) => {
    const x = triangle.x * scale;
    const y = triangle.y * scale;
    const size = triangle.size * scale;

    // направление от центра
    const dirX = x;
    const dirY = y;
    const norm = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
    const scaleFactor = distance / norm;

    return {
      x,
      y,
      size,
      color: triangle.color,
      rotation: triangle.rotation,
      points: triangle.points.map(scalePoint),
      startX: x * scaleFactor,
      startY: y * scaleFactor,
      scatterX: (Math.random() - 0.5) * 1500,
      scatterY: (Math.random() - 0.5) * 1500,
      scale: triangle.scale,
      z: triangle.z,
    };
  });

  const mutated = target.map((t) => ({
    ...t,
    x: (Math.random() - 0.5) * width * 2,
    y: (Math.random() - 0.5) * height * 2,
    rotation: Math.random() * 360,
  }));

  return { mutated, target };
}