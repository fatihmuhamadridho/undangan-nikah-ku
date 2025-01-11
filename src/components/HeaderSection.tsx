import { DEVELOPMENT_HEADER_IMAGE, PRODUCTION_HEADER_IMAGE } from '@/constants/images';
import { BackgroundImage } from '@mantine/core';
import React from 'react';
import Flower1Image from './Images/Flower1Image';
import { Variants, motion } from 'motion/react';

const HeaderSection = () => {
  const BACKGROUND_IMAGE =
    process.env.NODE_ENV === 'development' ? DEVELOPMENT_HEADER_IMAGE : PRODUCTION_HEADER_IMAGE;
  const rotateAnimation: Variants = {
    animate: {
      rotate: [0, 1, 5, 10, 15, 20, 15, 10, 5, 1, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  return (
    <BackgroundImage
      className="fixed overflow-hidden"
      src={BACKGROUND_IMAGE}
      w={'60%'}
      h={'100vh'}
    ></BackgroundImage>
  );
};

export default HeaderSection;
