import { Box, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

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
      <motion.div
        className="absolute top-[70px] -left-[60px] w-[172px] h-[255px] z-10"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation}
        animate="animate"
      >
        <Image src={'/images/flower-2.webp'} alt="flower-left" width={378} height={558} draggable={false} />
      </motion.div>
      <Image
        className="absolute -top-[20px] -left-[40px] rotate-[10deg] w-[216px] h-[303px]"
        src={'/images/branch.webp'}
        alt="branch-left"
        width={484}
        height={681}
        draggable={false}
      />
      <motion.div
        className="absolute top-[70px] -right-[60px] w-[172px] h-[255px] z-10"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation2}
        animate="animate"
      >
        <Image className="-scale-x-100" src={'/images/flower-2.webp'} alt="flower-right" width={378} height={558} draggable={false} />
      </motion.div>
      <Image
        className="absolute -top-[20px] -right-[40px] -scale-x-100 -rotate-[10deg] w-[216px] h-[303px]"
        src={'/images/branch.webp'}
        alt="branch-right"
        width={484}
        height={681}
        draggable={false}
      />
      <Text className="absolute mx-auto top-0 left-0 right-0 text-center" fw={700} c={'#e9088a'}>
        TIHTA
      </Text>
    </Box>
  );
};

export default SplashScreen;
