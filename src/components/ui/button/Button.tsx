import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    size = 'medium',
    className = '',
    disabled = false,
    type = 'button',
    borderColor = '#ffa600',
}) => {
    const handleClick = () => {
        setTimeout(() => {
            if (onClick) onClick();
        }, 1000);
    };

    return (
        <motion.button
            className={`${styles.button} ${styles[size]} ${className}`}
            onClick={handleClick}
            disabled={disabled}
            type={type}
            style={{ color: borderColor }}
            whileHover={{
                boxShadow: 'inset 0 0 12px rgba(0,0,0,0.9)',
            }}
            whileTap={{
                boxShadow: 'inset 0 0 24px rgba(0,0,0,1)',
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: .7
            }}
        >
            <motion.div
                className={styles.layer}
                whileHover={{
                    scale: 0.97,
                    boxShadow: 'inset 0 0 26px rgba(0,0,0,1)',
                }}
                whileTap={{
                    scale: 0.9,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    duration: .7
                }}
                style={{ borderColor: borderColor }}
            >
                {text}
            </motion.div>
        </motion.button>
    );
};

export default Button;
