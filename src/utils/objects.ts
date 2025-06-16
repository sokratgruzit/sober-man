import type { TriangleData } from "../types";

import { soberWord } from "./soberWord";
import { laptop } from "./laptop";
import { panic } from "./panic";
import { superMan } from "./superMan";
import { bridge } from "./bridge";

export function getTrianglesData(section: number, explore: boolean): {
  mutated: Omit<TriangleData, "phase">[];
  target: Omit<TriangleData, "phase">[];
} {
  const width = window.innerWidth;
  const height = window.innerHeight;

  function scalePoint(point: { x: number; y: number }) {
    return { x: point.x, y: point.y};
  }

  const distance = 1500;
  let base = soberWord;

  if (explore && section === 0) {
    base = laptop;
  }

  if (explore && section === 1) {
    base = panic;
  }

  if (explore && section === 2) {
    base = superMan;
  }

  if (explore && section === 3) {
    base = bridge;
  }

  const target = base.map((triangle) => {
    const x = triangle.x;
    const y = triangle.y;
    const size = triangle.size;

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