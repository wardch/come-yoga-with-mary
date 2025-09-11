'use client';

import {motion, type Variants} from 'framer-motion';
import type {ReactNode} from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const variants = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
};

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollAnimationProps) {
  const selectedVariants = variants[direction];

  return (
    <motion.div
      className={className}
      variants={selectedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
        margin: '-50px',
      }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredAnimation({
  children,
  className = '',
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Convert children to array if it's not already
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
        margin: '-30px',
      }}
    >
      {childrenArray.map((child, index) => {
        // Generate a stable unique key for each child
        const childKey = `staggered-item-${index}`;
        return (
          <motion.div key={childKey} variants={itemVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
