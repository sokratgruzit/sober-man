import { useState, useEffect, useRef } from "react";

import styles from "./Label.module.css";

interface labelStyles {
    color?: string;
    left?: number;
    right?: number;
    transform?: string;
    top?: number;
    opacity?: number;
}

interface LabelProps {
    text?: string;
    color?: string;
    direction?: string;
    isHovered?: boolean;
}

const Label: React.FC<LabelProps> = ({ text, color, direction, isHovered }) => {
    const [labelWidth, setLabelWidth] = useState<number>(0);
    const [labelStyles, setLabelStyles] = useState<labelStyles>({
        left: 65, 
        color,
        opacity: 0 
    });

    const labelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (labelRef.current) setLabelWidth(labelRef.current.clientWidth);
    }, [labelRef.current]);

    useEffect(() => {
        let labelStyles: labelStyles = {
            left: 65, 
            color,
            opacity: isHovered ? 1 : 0 
        };

        if (direction === "right") {
            labelStyles = {
                right: 65, 
                color,
                opacity: isHovered ? 1 : 0 
            };
        }

        if (direction === "right-rotate") {
            labelStyles = {
                top: labelWidth / 2 + 55, 
                color,
                transform: "rotate(-90deg)",
                opacity: isHovered ? 1 : 0 
            };
        }

        setLabelStyles(labelStyles);
    }, [direction, isHovered]);

    return (
        <div 
            ref={labelRef}
            className={styles.container}
            style={labelStyles}
        >
            {text}
        </div>
    )
};

export default Label;