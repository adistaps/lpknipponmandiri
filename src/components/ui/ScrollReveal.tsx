'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    className?: string;
    distance?: number;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className = '',
    distance = 30,
    once = true,
}: ScrollRevealProps) {
    const getInitial = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: distance };
            case 'down':
                return { opacity: 0, y: -distance };
            case 'left':
                return { opacity: 0, x: distance };
            case 'right':
                return { opacity: 0, x: -distance };
            case 'none':
                return { opacity: 0 };
            default:
                return { opacity: 0, y: distance };
        }
    };

    return (
        <motion.div
            initial={getInitial()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: '-40px' }}
            transition={{
                duration,
                delay,
                ease: [0.215, 0.61, 0.355, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
