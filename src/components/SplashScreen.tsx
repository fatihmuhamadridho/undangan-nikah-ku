import { Box, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Flower2Image from './Images/Flower2Image';
import BranchImage from './Images/BranchImage';
import PalmImage from './Images/PalmImage';
import PineImage from './Images/PineImage';
import Flower1Image from './Images/Flower1Image';

const SplashScreen = () => {
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

  const rotateAnimation2: Variants = {
    animate: {
      rotate: [0, -1, -5, -10, -15, -20, -15, -10, -5, -1, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  return (
    <Box className="fixed z-30" w={'100vw'} h={'100vh'} bg={'#e5f6f3'}>
      <Image className="fixed !w-[1920px] !h-[1280px] opacity-30" src={'/images/bg.webp'} alt="bg" width={2268} height={1071} />
      {/* flower-2 */}
      <motion.div
        className="absolute top-[70px] -left-[60px] w-[172px] h-[255px] z-10"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation2}
        animate="animate"
      >
        <Flower2Image />
      </motion.div>
      <motion.div
        className="absolute top-[70px] -right-[60px] w-[172px] h-[255px] z-10"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation}
        animate="animate"
      >
        <Flower2Image className="-scale-x-100" />
      </motion.div>
      {/* branch */}
      <BranchImage className="absolute -top-[20px] -left-[40px] rotate-[10deg] w-[216px] h-[303px]" />
      <BranchImage className="absolute -top-[20px] -right-[40px] -rotate-[10deg] -scale-x-100 w-[216px] h-[303px]" />
      {/* palm */}
      <PalmImage className="absolute -bottom-[450px] -left-[100px] w-[360px] h-[770px] z-10" />
      <PalmImage className="absolute -bottom-[450px] -right-[100px] -scale-x-100 w-[360px] h-[770px] z-10" />
      {/* pine */}
      <PineImage className="absolute -bottom-[30px] -right-[180px] w-[360px] h-[557px]" />
      <PineImage className="absolute -bottom-[30px] -left-[180px] -scale-x-100 w-[360px] h-[557px]" />
      {/* flower-1 */}
      <motion.div
        className="absolute -bottom-[150px] right-[70px] -rotate-[45deg] w-[216px] h-[301px] z-20"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation2}
        animate="animate"
      >
        <Flower1Image />
      </motion.div>
      <motion.div
        className="absolute -bottom-[150px] left-[70px] rotate-[45deg] w-[216px] h-[301px] z-20"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation}
        animate="animate"
      >
        <Flower1Image className="-scale-x-100" />
      </motion.div>
      <Text className="absolute mx-auto top-0 left-0 right-0 text-center" fw={700} c={'#e9088a'}>
        TIHTA
      </Text>
    </Box>
  );
};

export default SplashScreen;
