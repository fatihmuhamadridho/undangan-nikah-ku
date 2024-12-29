import { DEVELOPMENT_HEADER_IMAGE, PRODUCTION_HEADER_IMAGE } from '@/constants/images';
import { BackgroundImage } from '@mantine/core';
import React from 'react';
import PalmImage from './Images/PalmImage';
import PineImage from './Images/PineImage';
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
    <BackgroundImage className="fixed overflow-hidden" src={BACKGROUND_IMAGE} w={'60%'} h={'100vh'}>
      <PineImage className="absolute -bottom-[20px] -left-[100px] w-[272px] h-[421px]" />
      <PineImage className="absolute -bottom-[20px] -right-[100px] w-[272px] h-[421px]" />
      <PalmImage className="absolute -bottom-[350px] w-[272px] h-[582px]" />
      <PalmImage className="absolute -bottom-[350px] right-0 w-[272px] h-[582px]" />
      <motion.div
        className="absolute -bottom-[150px] right-[70px] -rotate-[45deg] w-[216px] h-[301px] z-20"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation}
        animate="animate"
      >
        <Flower1Image />
      </motion.div>
    </BackgroundImage>
  );
};

export default HeaderSection;
