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
}

export const trianglesData: Omit<TriangleData, "phase">[] = [
    //S - start
    {
        x: -360,
        y: -129,
        size: .7,
        color: "#E64A19",
        rotation: 55,
        points: [
            { x: 55, y: 0 },
            { x: 70, y: -40 },
            { x: 0, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -360,
        y: -129,
        size: .7,
        color: "#D32F2F",
        rotation: 55,
        points: [
            { x: -20, y: -40 },
            { x: 0, y: 0 },
            { x: 70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -409,
        y: -129,
        size: .7,
        color: "#D50000",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: 90, y: -40 },
            { x: 68, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -409,
        y: -129,
        size: .7,
        color: "#FF4F4F",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: -17, y: -40 },
            { x: 90, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -409,
        y: -129,
        size: .7,
        color: "#F44336",
        rotation: -55,
        points: [
            { x: 0, y: 0 },
            { x: -70, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -409,
        y: -129,
        size: .7,
        color: "#FF4F4F",
        rotation: -55,
        points: [
            { x: 20, y: -40 },
            { x: 0, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -435,
        y: -79,
        size: .7,
        color: "#D32F2F",
        rotation: 0,
        points: [
            { x: -35, y: 0 },
            { x: -35, y: -40 },
            { x: 0, y: -20 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -409,
        y: -57,
        size: .7,
        color: "#D32F2F",
        rotation: -35,
        points: [
            { x: 0, y: 0 },
            { x: -40, y: 20 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -409,
        y: -57,
        size: .7,
        color: "#E53935",
        rotation: -35,
        points: [
            { x: -40, y: 20 },
            { x: -40, y: -70 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -409,
        y: -28,
        size: .7,
        color: "#C62828",
        rotation: 0,
        points: [
            { x: 70, y: 0 },
            { x: 90, y: -40 },
            { x: -20, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -409,
        y: -28,
        size: .7,
        color: "#FF5252",
        rotation: 0,
        points: [
            { x: 90, y: -40 },
            { x: -20, y: 0 },
            { x: 0, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -360,
        y: -28,
        size: .7,
        color: "#E64A19",
        rotation: 50,
        points: [
            { x: 55, y: 0 },
            { x: 70, y: -40 },
            { x: 0, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -360,
        y: -28,
        size: .7,
        color: "#D32F2F",
        rotation: 50,
        points: [
            { x: -20, y: -40 },
            { x: 0, y: 0 },
            { x: 70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -335,
        y: 18,
        size: .7,
        color: "#D32F2F",
        rotation: 0,
        points: [
            { x: 35, y: 0 },
            { x: 35, y: -40 },
            { x: 0, y: -25 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -338,
        y: 57,
        size: .7,
        color: "#D32F2F",
        rotation: 35,
        points: [
            { x: 0, y: 30 },
            { x: -40, y: 20 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -338,
        y: 57,
        size: .7,
        color: "#E53935",
        rotation: 35,
        points: [
            { x: -40, y: 20 },
            { x: -40, y: -70 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -430,
        y: 78,
        size: .7,
        color: "#D50000",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: 90, y: -40 },
            { x: 118, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -430,
        y: 78,
        size: .7,
        color: "#FF4F4F",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: -17, y: -40 },
            { x: 90, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    // S - end
    // o - start
    {
        x: -180,
        y: -35,
        size: .7,
        color: "#E64A19",
        rotation: 55,
        points: [
            { x: 60, y: 0 },
            { x: 90, y: -35 },
            { x: 0, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -180,
        y: -35,
        size: .7,
        color: "#D32F2F",
        rotation: 55,
        points: [
            { x: -20, y: -40 },
            { x: 0, y: 0 },
            { x: 90, y: -35 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -227,
        y: -35,
        size: .7,
        color: "#D50000",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: 90, y: -40 },
            { x: 68, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -227,
        y: -35,
        size: .7,
        color: "#FF4F4F",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: -17, y: -40 },
            { x: 90, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -227,
        y: -35,
        size: .7,
        color: "#F44336",
        rotation: -55,
        points: [
            { x: 0, y: 0 },
            { x: -70, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -227,
        y: -35,
        size: .7,
        color: "#FF4F4F",
        rotation: -55,
        points: [
            { x: 20, y: -40 },
            { x: 0, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -252,
        y: 17,
        size: .7,
        color: "#D32F2F",
        rotation: 0,
        points: [
            { x: -35, y: 0 },
            { x: -35, y: -40 },
            { x: 0, y: -20 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -227,
        y: 42,
        size: .7,
        color: "#D32F2F",
        rotation: -35,
        points: [
            { x: 0, y: 0 },
            { x: -40, y: 20 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -227,
        y: 42,
        size: .7,
        color: "#E53935",
        rotation: -35,
        points: [
            { x: -40, y: 20 },
            { x: -40, y: -70 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -227,
        y: 73,
        size: .7,
        color: "#C62828",
        rotation: 0,
        points: [
            { x: 90, y: 0 },
            { x: 70, y: -40 },
            { x: -20, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -227,
        y: 73,
        size: .7,
        color: "#FF5252",
        rotation: 0,
        points: [
            { x: 70, y: -40 },
            { x: -20, y: 0 },
            { x: 0, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -155,
        y: 3,
        size: .7,
        color: "#E64A19",
        rotation: 120,
        points: [
            { x: 70, y: 0 },
            { x: 90, y: -40 },
            { x: 0, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -155,
        y: 3,
        size: .7,
        color: "#D32F2F",
        rotation: 120,
        points: [
            { x: -20, y: -40 },
            { x: 0, y: 0 },
            { x: 90, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    // b - start
    {
        x: 3,
        y: -35,
        size: .7,
        color: "#E64A19",
        rotation: 55,
        points: [
            { x: 60, y: 0 },
            { x: 90, y: -35 },
            { x: 0, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 3,
        y: -35,
        size: .7,
        color: "#D32F2F",
        rotation: 55,
        points: [
            { x: -20, y: -40 },
            { x: 0, y: 0 },
            { x: 90, y: -35 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -40,
        y: -35,
        size: .7,
        color: "#D50000",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: 90, y: -40 },
            { x: 68, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -40,
        y: -35,
        size: .7,
        color: "#FF4F4F",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: -17, y: -40 },
            { x: 90, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -40,
        y: -35,
        size: .7,
        color: "#F44336",
        rotation: -55,
        points: [
            { x: 0, y: 0 },
            { x: -70, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -40,
        y: -35,
        size: .7,
        color: "#FF4F4F",
        rotation: -55,
        points: [
            { x: 100, y: -130 },
            { x: 0, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -65,
        y: 17,
        size: .7,
        color: "#D32F2F",
        rotation: 0,
        points: [
            { x: -35, y: 0 },
            { x: -35, y: -40 },
            { x: 0, y: -20 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -40,
        y: 42,
        size: .7,
        color: "#D32F2F",
        rotation: -35,
        points: [
            { x: 0, y: 0 },
            { x: -40, y: 20 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -40,
        y: 42,
        size: .7,
        color: "#E53935",
        rotation: -35,
        points: [
            { x: -40, y: 20 },
            { x: -40, y: -70 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -40,
        y: 73,
        size: .7,
        color: "#C62828",
        rotation: 0,
        points: [
            { x: 90, y: 0 },
            { x: 70, y: -40 },
            { x: -20, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: -40,
        y: 73,
        size: .7,
        color: "#FF5252",
        rotation: 0,
        points: [
            { x: 70, y: -40 },
            { x: -20, y: 0 },
            { x: 0, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 27,
        y: 3,
        size: .7,
        color: "#E64A19",
        rotation: 120,
        points: [
            { x: 70, y: 0 },
            { x: 90, y: -40 },
            { x: 0, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 27,
        y: 3,
        size: .7,
        color: "#D32F2F",
        rotation: 120,
        points: [
            { x: -20, y: -40 },
            { x: 0, y: 0 },
            { x: 90, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    // e - start
    {
        x: 187,
        y: -35,
        size: .7,
        color: "#E64A19",
        rotation: 55,
        points: [
            { x: 60, y: 5 },
            { x: 90, y: -35 },
            { x: 0, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 187,
        y: -35,
        size: .7,
        color: "#D32F2F",
        rotation: 55,
        points: [
            { x: -20, y: -40 },
            { x: 0, y: 0 },
            { x: 90, y: -35 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 143,
        y: -35,
        size: .7,
        color: "#D50000",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: 90, y: -40 },
            { x: 68, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 143,
        y: -35,
        size: .7,
        color: "#FF4F4F",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: -17, y: -40 },
            { x: 90, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 143,
        y: -35,
        size: .7,
        color: "#F44336",
        rotation: -55,
        points: [
            { x: 0, y: 0 },
            { x: -70, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 143,
        y: -35,
        size: .7,
        color: "#FF4F4F",
        rotation: -55,
        points: [
            { x: 20, y: -40 },
            { x: 0, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 117,
        y: 17,
        size: .7,
        color: "#D32F2F",
        rotation: 0,
        points: [
            { x: -35, y: 0 },
            { x: -35, y: -40 },
            { x: 0, y: -20 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 143,
        y: 42,
        size: .7,
        color: "#D32F2F",
        rotation: -35,
        points: [
            { x: 0, y: 0 },
            { x: -40, y: 20 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 143,
        y: 42,
        size: .7,
        color: "#E53935",
        rotation: -35,
        points: [
            { x: -40, y: 20 },
            { x: -40, y: -70 },
            { x: 0, y: -70 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 143,
        y: 73,
        size: .7,
        color: "#C62828",
        rotation: 0,
        points: [
            { x: 90, y: 0 },
            { x: 70, y: -40 },
            { x: -20, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 143,
        y: 73,
        size: .7,
        color: "#FF5252",
        rotation: 0,
        points: [
            { x: 70, y: -40 },
            { x: -20, y: 0 },
            { x: 0, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 138,
        y: 30,
        size: .7,
        color: "#D32F2F",
        rotation: 0,
        points: [
            { x: -30, y: -40 },
            { x: 0, y: 0 },
            { x: 155, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    // r - start
    {
        x: 367,
        y: -35,
        size: .7,
        color: "#E64A19",
        rotation: 55,
        points: [
            { x: 60, y: 0 },
            { x: 90, y: -35 },
            { x: 0, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 367,
        y: -35,
        size: .7,
        color: "#D32F2F",
        rotation: 55,
        points: [
            { x: -20, y: -40 },
            { x: 0, y: 0 },
            { x: 90, y: -35 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 322,
        y: -35,
        size: .7,
        color: "#D50000",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: 90, y: -40 },
            { x: 68, y: 0 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 322,
        y: -35,
        size: .7,
        color: "#FF4F4F",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: -17, y: -40 },
            { x: 90, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 322,
        y: -35,
        size: .7,
        color: "#F44336",
        rotation: -55,
        points: [
            { x: 0, y: 0 },
            { x: -70, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 322,
        y: -35,
        size: .7,
        color: "#FF4F4F",
        rotation: -55,
        points: [
            { x: 20, y: -40 },
            { x: 0, y: 0 },
            { x: -70, y: -40 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 295,
        y: 17,
        size: .7,
        color: "#D32F2F",
        rotation: 0,
        points: [
            { x: -35, y: 0 },
            { x: -35, y: -40 },
            { x: 0, y: -20 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 298,
        y: 80,
        size: .7,
        color: "#D32F2F",
        rotation: 0,
        points: [
            { x: 0, y: 0 },
            { x: -40, y: 20 },
            { x: 0, y: -110 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 298,
        y: 80,
        size: .7,
        color: "#E53935",
        rotation: 0,
        points: [
            { x: -40, y: 20 },
            { x: -40, y: -90 },
            { x: 0, y: -110 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    }
];

export const trianglesData2: Omit<TriangleData, "phase">[] = [
    //S - start
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#221f1e",
        rotation: 0,
        points: [
            { x: -173, y: -147 },
            { x: -172, y: -125 },
            { x: 0, y: -147 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#363230",
        rotation: 0,
        points: [
            { x: -173, y: -125 },
            { x: 0, y: -125 },
            { x: 0, y: -147 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#221f1e",
        rotation: 0,
        points: [
            { x: 168, y: -147 },
            { x: 168, y: -125 },
            { x: 0, y: -147 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#363230",
        rotation: 0,
        points: [
            { x: 0, y: -125 },
            { x: 168, y: -125 },
            { x: 0, y: -147 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#221f1e",
        rotation: 0,
        points: [
            { x: -162, y: 65 },
            { x: -152, y: 65 },
            { x: -172, y: -125 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#363230",
        rotation: 0,
        points: [
            { x: -162, y: -125 },
            { x: -152, y: 65 },
            { x: -172, y: -125 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#221f1e",
        rotation: 0,
        points: [
            { x: -152, y: 49 },
            { x: -152, y: 65 },
            { x: -100, y: 65 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#363230",
        rotation: 0,
        points: [
            { x: -152, y: 49 },
            { x: -100, y: 49 },
            { x: -100, y: 65 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#221f1e",
        rotation: 0,
        points: [
            { x: -100, y: 49 },
            { x: -100, y: 65 },
            { x: 160, y: 65 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#363230",
        rotation: 0,
        points: [
            { x: -100, y: 49 },
            { x: 160, y: 49 },
            { x: 160, y: 65 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#928e8c",
        rotation: 0,
        points: [
            { x: 150, y: 49 },
            { x: -152, y: 46 },
            { x: -162, y: -125 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#363230",
        rotation: 0,
        points: [
            { x: 150, y: 49 },
            { x: 150, y: -125 },
            { x: -172, y: -125 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#221f1e",
        rotation: 0,
        points: [
            { x: 155, y: -125 },
            { x: 160, y: 49 },
            { x: 150, y: 49 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#363230",
        rotation: 0,
        points: [
            { x: 155, y: -125 },
            { x: 160, y: 49 },
            { x: 167, y: -125 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#363230",
        rotation: 0,
        points: [
            { x: -168, y: 70 },
            { x: 168, y: 70 },
            { x: -175, y: 90 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#221f1e",
        rotation: 0,
        points: [
            { x: 175, y: 90 },
            { x: 168, y: 70 },
            { x: -175, y: 90 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#221f1e",
        rotation: 0,
        points: [
            { x: 175, y: 90 },
            { x: 220, y: 230 },
            { x: 160, y: 90 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#221f1e",
        rotation: 0,
        points: [
            { x: -175, y: 90 },
            { x: -220, y: 230 },
            { x: -160, y: 90 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#e6e2ae",
        rotation: 0,
        points: [
            { x: -155, y: 140 },
            { x: -214, y: 220 },
            { x: -183, y: 160 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#ede795",
        rotation: 0,
        points: [
            { x: -155, y: 140 },
            { x: -214, y: 220 },
            { x: -138, y: 148 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#ede795",
        rotation: 0,
        points: [
            { x: -157, y: 140 },
            { x: -127, y: 112 },
            { x: -140, y: 112 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#ede795",
        rotation: 0,
        points: [
            { x: -180, y: 155 },
            { x: -150, y: 127 },
            { x: -163, y: 127 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#000000",
        rotation: 0,
        points: [
            { x: -180, y: 155 },
            { x: -150, y: 127 },
            { x: -163, y: 147 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#000000",
        rotation: 0,
        points: [
            { x: -158, y: 143 },
            { x: -128, y: 115 },
            { x: -141, y: 135 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#ede795",
        rotation: 0,
        points: [
            { x: -142, y: 135 },
            { x: -102, y: 107 },
            { x: -115, y: 107 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#d89c22",
        rotation: 0,
        points: [
            { x: -142, y: 135 },
            { x: -102, y: 107 },
            { x: -115, y: 135 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#402e0b",
        rotation: 0,
        points: [
            { x: -142, y: 135 },
            { x: -138, y: 145 },
            { x: -115, y: 135 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#402e0b",
        rotation: 0,
        points: [
            { x: -88, y: 115 },
            { x: -102, y: 107 },
            { x: -115, y: 135 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: -125, y: 220 },
            { x: -214, y: 220 },
            { x: -138, y: 148 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: -125, y: 220 },
            { x: -113, y: 138 },
            { x: -138, y: 148 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#f9f45a",
        rotation: 0,
        points: [
            { x: -125, y: 220 },
            { x: -113, y: 138 },
            { x: -108, y: 217 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#9c8126",
        rotation: 0,
        points: [
            { x: -95, y: 200 },
            { x: -113, y: 138 },
            { x: -108, y: 217 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#6d5a1b",
        rotation: 0,
        points: [
            { x: -95, y: 200 },
            { x: -90, y: 210 },
            { x: -108, y: 217 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: -125, y: 220 },
            { x: -214, y: 220 },
            { x: -145, y: 260 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: -165, y: 279 },
            { x: -214, y: 220 },
            { x: -145, y: 260 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: -125, y: 220 },
            { x: -90, y: 210 },
            { x: -145, y: 260 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: -95, y: 240 },
            { x: -90, y: 210 },
            { x: -145, y: 260 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: -95, y: 240 },
            { x: -130, y: 260 },
            { x: -145, y: 260 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: -95, y: 240 },
            { x: -90, y: 210 },
            { x: -80, y: 230 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#6d5a1b",
        rotation: 0,
        points: [
            { x: -66, y: 217 },
            { x: -92, y: 200 },
            { x: -80, y: 230 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#6d5a1b",
        rotation: 0,
        points: [
            { x: -66, y: 217 },
            { x: -92, y: 200 },
            { x: -74, y: 188 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#6d5a1b",
        rotation: 0,
        points: [
            { x: -66, y: 217 },
            { x: -55, y: 200 },
            { x: -74, y: 188 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#6d5a1b",
        rotation: 0,
        points: [
            { x: -63, y: 170 },
            { x: -55, y: 200 },
            { x: -74, y: 188 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#6d5a1b",
        rotation: 0,
        points: [
            { x: -87, y: 155 },
            { x: -113, y: 138 },
            { x: -101, y: 168 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#6d5a1b",
        rotation: 0,
        points: [
            { x: -86, y: 155 },
            { x: -112, y: 138 },
            { x: -94, y: 126 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#6d5a1b",
        rotation: 0,
        points: [
            { x: -85, y: 155 },
            { x: -74, y: 138 },
            { x: -93, y: 126 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#000000",
        rotation: 0,
        points: [
            { x: -235, y: 230 },
            { x: -205, y: 235 },
            { x: -237, y: 275 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#000000",
        rotation: 0,
        points: [
            { x: -235, y: 230 },
            { x: -270, y: 270 },
            { x: -237, y: 275 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#E64A19",
        rotation: 0,
        points: [
            { x: -198, y: 236 },
            { x: -233, y: 276 },
            { x: -200, y: 281 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#D32F2F",
        rotation: 0,
        points: [
            { x: -198, y: 236 },
            { x: -170, y: 276 },
            { x: -200, y: 281 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#E64A19",
        rotation: 0,
        points: [
            { x: -190, y: 316 },
            { x: -170, y: 276 },
            { x: -200, y: 281 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: 125, y: 220 },
            { x: 214, y: 220 },
            { x: 145, y: 260 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: 205, y: 330 },
            { x: 214, y: 220 },
            { x: 145, y: 260 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: 125, y: 220 },
            { x: 55, y: 185 },
            { x: 145, y: 260 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: 115, y: 255 },
            { x: 55, y: 185 },
            { x: 145, y: 260 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: 125, y: 220 },
            { x: 55, y: 185 },
            { x: 50, y: 160 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#efe932",
        rotation: 0,
        points: [
            { x: 125, y: 220 },
            { x: 214, y: 220 },
            { x: 150, y: 140 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#6d5a1b",
        rotation: 0,
        points: [
            { x: 165, y: 130 },
            { x: 214, y: 220 },
            { x: 150, y: 140 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#ffd13c",
        rotation: 0,
        points: [
            { x: 125, y: 220 },
            { x: 93, y: 160 },
            { x: 150, y: 140 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#ffd13c",
        rotation: 0,
        points: [
            { x: 125, y: 220 },
            { x: 93, y: 160 },
            { x: 93, y: 180 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#c47734",
        rotation: 0,
        points: [
            { x: 77, y: 130 },
            { x: 93, y: 160 },
            { x: 118, y: 148 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#945a28",
        rotation: 0,
        points: [
            { x: 107, y: 119 },
            { x: 120, y: 107 },
            { x: 148, y: 137 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#c47734",
        rotation: 0,
        points: [
            { x: 107, y: 119 },
            { x: 123, y: 149 },
            { x: 148, y: 136 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#945a28",
        rotation: 0,
        points: [
            { x: 77, y: 130 },
            { x: 90, y: 118 },
            { x: 118, y: 148 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#945a28",
        rotation: 0,
        points: [
            { x: 107, y: 119 },
            { x: 120, y: 107 },
            { x: 148, y: 137 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#c47734",
        rotation: 0,
        points: [
            { x: 136, y: 116 },
            { x: 152, y: 138 },
            { x: 165, y: 130 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#663f1c",
        rotation: 0,
        points: [
            { x: 100, y: 118 },
            { x: 102, y: 108 },
            { x: 122, y: 108 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
    {
        x: 0,
        y: 0,
        size: .7,
        color: "#663f1c",
        rotation: 0,
        points: [
            { x: 60, y: 138 },
            { x: 62, y: 128 },
            { x: 82, y: 128 }
        ],
        startX: 0,      
        startY: 0,
        scatterX: 0,   
        scatterY: 0,
        scale: 3,
        z: -3
    },
];

export function getTrianglesData(section: number, explore: boolean): {
  mutated: Omit<TriangleData, "phase">[];
  target: Omit<TriangleData, "phase">[];
} {
  const width = window.innerWidth > 1150 ? window.innerWidth : 750;
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
  let base = trianglesData;

  if (explore && section === 0) {
    base = trianglesData2;
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