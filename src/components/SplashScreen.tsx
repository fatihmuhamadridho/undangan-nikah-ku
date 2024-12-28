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
      {/* flower-2 */}
      <motion.div
        className="absolute top-[70px] -left-[60px] w-[172px] h-[255px] z-10"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation2}
        animate="animate"
      >
        <Image src={'/images/flower-2.webp'} alt="flower-left" width={378} height={558} draggable={false} />
      </motion.div>
      <motion.div
        className="absolute top-[70px] -right-[60px] w-[172px] h-[255px] z-10"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation}
        animate="animate"
      >
        <Image className="-scale-x-100" src={'/images/flower-2.webp'} alt="flower-right" width={378} height={558} draggable={false} />
      </motion.div>
      {/* branch */}
      <Image
        className="absolute -top-[20px] -left-[40px] rotate-[10deg] w-[216px] h-[303px]"
        src={'/images/branch.webp'}
        alt="branch-left"
        width={484}
        height={681}
        draggable={false}
      />
      <Image
        className="absolute -top-[20px] -right-[40px] -rotate-[10deg] -scale-x-100 w-[216px] h-[303px]"
        src={'/images/branch.webp'}
        alt="branch-right"
        width={484}
        height={681}
        draggable={false}
      />
      {/* palm */}
      <Image
        className="absolute -bottom-[450px] -left-[100px] w-[360px] h-[770px] z-10"
        src={'/images/palm.webp'}
        alt="palm-left"
        width={525}
        height={1123}
        draggable={false}
      />
      <Image
        className="absolute -bottom-[450px] -right-[100px] -scale-x-100 w-[360px] h-[770px] z-10"
        src={'/images/palm.webp'}
        alt="palm-left"
        width={525}
        height={1123}
        draggable={false}
      />
      {/* pine */}
      <Image
        className="absolute -bottom-[30px] -right-[180px] w-[360px] h-[557px]"
        src={'/images/pine.webp'}
        alt="pine-left"
        width={474}
        height={734}
        draggable={false}
      />
      <Image
        className="absolute -bottom-[30px] -left-[180px] -scale-x-100 w-[360px] h-[557px]"
        src={'/images/pine.webp'}
        alt="pine-left"
        width={474}
        height={734}
        draggable={false}
      />
      {/* flower-1 */}
      <motion.div
        className="absolute -bottom-[150px] right-[70px] -rotate-[45deg] w-[216px] h-[301px] z-20"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation2}
        animate="animate"
      >
        <Image src={'/images/flower-1.webp'} alt="flower-1-right" width={413} height={577} draggable={false} />
      </motion.div>
      <motion.div
        className="absolute -bottom-[150px] left-[70px] rotate-[45deg] w-[216px] h-[301px] z-20"
        style={{ transformOrigin: 'bottom center' }}
        variants={rotateAnimation}
        animate="animate"
      >
        <Image className="-scale-x-100" src={'/images/flower-1.webp'} alt="flower-1-left" width={413} height={577} draggable={false} />
      </motion.div>
      <Text className="absolute mx-auto top-0 left-0 right-0 text-center" fw={700} c={'#e9088a'}>
        TIHTA
      </Text>
    </Box>
  );
};

export default SplashScreen;
