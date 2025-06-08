type Point = { x: number; y: number };

export interface TriangleData {
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  points: Point[];
  phase: number;
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
];

export function getTrianglesData(): Omit<TriangleData, "phase">[] {
    const width = window.innerWidth > 1150 ? window.innerWidth : 750;
    const height = window.innerWidth > 1150 ?  window.innerHeight : 740;
    const baseWidth = 1150;
    const baseHeight = 740;
    const scaleX = width / baseWidth;
    const scaleY = height / baseHeight;
    const scale = Math.sqrt(scaleX * scaleY);

    function scalePoint(point: { x: number; y: number }) {
        return { x: point.x * scale, y: point.y * scale };
    }

    return trianglesData.map(triangle => ({
        x: triangle.x * scale,
        y: triangle.y * scale,
        size: triangle.size * scale,
        color: triangle.color,
        rotation: triangle.rotation,
        points: triangle.points.map(scalePoint)
    }));
}