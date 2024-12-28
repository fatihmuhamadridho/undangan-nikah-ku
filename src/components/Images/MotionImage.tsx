import React, { CSSProperties } from 'react';
import { AnimationControls, motion, TargetAndTransition, VariantLabels, Variants } from 'framer-motion';

export interface MotionImageProps {
  className?: string;
  children?: React.ReactNode;
  position?: CSSProperties['position'];
  transformOrigin?: 'bottom center';
  animate?: 'animate' | AnimationControls | TargetAndTransition | VariantLabels;
  variants?: Variants;
  width?: number | string;
  height?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}

const MotionImage = (props: MotionImageProps) => {
  const { className, children, variants, animate, position, transformOrigin, width, height, top, right, bottom, left } = props;
  return (
    <motion.div
      className={className}
      variants={variants}
      animate={animate}
      style={{ position, transformOrigin, width, height, top, right, bottom, left }}
    >
      {children}
    </motion.div>
  );
};

export default MotionImage;
