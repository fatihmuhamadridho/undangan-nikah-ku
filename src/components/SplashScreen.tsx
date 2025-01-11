import { Box, Text } from '@mantine/core';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Flower2Image from './Images/Flower2Image';
import BranchImage from './Images/BranchImage';
import PalmImage from './Images/PalmImage';
import PineImage from './Images/PineImage';
import Flower1Image from './Images/Flower1Image';
import BgImage from './Images/BgImage';

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
      rotate: [-30, -15, 0, -15, -30],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  return (
    <Box style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }} bg={'#e5f6f3'}>
      {/* background */}
      <Box
        style={{
          width: '140%',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          height: '100%',
          transform: 'translate(-50%, 0)',
        }}
      >
        <Box style={{ height: '100%' }}>
          <BgImage
            style={{
              objectPosition: '50% 0%',
              opacity: 0.3,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              verticalAlign: 'middle',
            }}
          />
        </Box>
      </Box>

      {/* top-left */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '15%',
          transform: 'translate(-30%, -10%)',
        }}
      >
        <BranchImage style={{ position: 'relative', width: '100%', height: 'auto' }} />
        <motion.div
          style={{
            transformOrigin: 'bottom center',
            position: 'absolute',
            width: 173,
            height: 255,
            top: '30%',
            right: '20%',
          }}
          variants={rotateAnimation}
          animate="animate"
        >
          <Flower2Image />
        </motion.div>
      </Box>

      {/* top-right */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '15%',
          transform: 'translate(30%, -10%) scaleX(-1)',
        }}
      >
        <BranchImage style={{ position: 'relative', width: '100%', height: 'auto' }} />
        <motion.div
          style={{
            transformOrigin: 'bottom center',
            position: 'absolute',
            width: 173,
            height: 255,
            top: '30%',
            right: '20%',
          }}
          variants={rotateAnimation}
          animate="animate"
        >
          <Flower2Image />
        </motion.div>
      </Box>

      {/* bottom-left */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '25%',
          transform: 'translate(-50%, 10%)',
        }}
      >
        <PineImage />
        <PalmImage style={{ position: 'absolute', top: '35%', left: '25%', width: '100%' }} />
        <motion.div
          style={{
            transformOrigin: 'bottom center',
            position: 'absolute',
            top: '65%',
            left: '80%',
            width: '60%',
            scaleX: -1,
          }}
          variants={rotateAnimation2}
          animate="animate"
        >
          <Flower1Image />
        </motion.div>
      </Box>

      {/* bottom-right */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '25%',
          transform: 'translate(50%, 10%)',
        }}
      >
        <PineImage />
        <PalmImage
          style={{
            position: 'absolute',
            top: '35%',
            right: '25%',
            width: '100%',
            transform: 'scaleX(-1)',
          }}
        />
        <motion.div
          style={{
            transformOrigin: 'bottom center',
            position: 'absolute',
            top: '65%',
            right: '80%',
            width: '60%',
          }}
          variants={rotateAnimation2}
          animate="animate"
        >
          <Flower1Image />
        </motion.div>
      </Box>
      <Text
        className="absolute top-0 left-0 right-0 mx-auto py-2 min-h-[64px] flex items-center justify-center"
        fz={24}
        fw={700}
        c={'#e9088a'}
      >
        TIRTA & FATIH
      </Text>
    </Box>
  );
};

export default SplashScreen;
