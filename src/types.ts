export type Point = { x: number; y: number };

export interface TriangleData {
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  points: Point[];
  phase: number;
  startX: number;      
  startY: number;      
  scatterX: number;    
  scatterY: number;    
  scale: number;   
  z: number;
  targetX?: number;
  targetY?: number;
  targetRotation?: number;
  targetColor?: string;
  targetPoints?: Point[];
  inactive?: boolean;
  orbitAngle?: number;
  orbitRadius?: number;
  orbitSpeed?: number;
  alpha?: number;
}

export interface TypingTextProps {
  text: string;
  className?: string;
  delayPerChar?: number; 
  delayPerWord?: number; 
  showCursor?: boolean;
}

interface Circle {
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
}

export interface ConfProps {
  circle1: Circle;
  circle2: Circle;
}