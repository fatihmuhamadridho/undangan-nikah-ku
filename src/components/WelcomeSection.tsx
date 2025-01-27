import { Box, Flex, Stack, Text } from '@mantine/core';
import React from 'react';
import FrameImage from './Images/FrameImage';
import MountainImage from './Images/MountainImage';
import BgImage from './Images/BgImage';
import BranchImage from './Images/BranchImage';
import Flower2Image from './Images/Flower2Image';
import Flower1Image from './Images/Flower1Image';
import TreeImage from './Images/TreeImage';
import PineImage from './Images/PineImage';
import PalmImage from './Images/PalmImage';
import Flower3Image from './Images/Flower3Image';
import Flower4Image from './Images/Flower4Image';
import { motion, Variants } from 'framer-motion';

const WelcomeSection = () => {
  const rotateAnimation: Variants = {
    animate: {
      rotate: [
        0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13.5, 14, 13.5, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
        0.5, 0,
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  return (
    <Box className="relative overflow-hidden">
      <Box className="absolute inset-0">
        <Box className="absolute bottom-0 left-1/2 w-[120%]" style={{ transform: 'translate(-50%, 0)' }}>
          <Box
            className="absolute bottom-0 left-1/2 w-full"
            style={{ transform: 'translate(-50%, 35%)', opacity: 0.6 }}
          >
            <MountainImage className="relative w-full h-auto" />
          </Box>
          <BgImage className="relative w-full h-auto" />
        </Box>
      </Box>
      <Box className="absolute inset-0">
        {/* top-left */}
        <Box className="absolute top-0 left-0 w-[35%]" style={{ transform: 'translate(-30%, -10%)' }}>
          <BranchImage />
        </Box>
        <Box className="absolute top-8 left-0 w-[30%]" style={{ transform: 'translate(-50%, 0)' }}>
          <motion.div
            style={{
              transformOrigin: 'bottom center',
            }}
            variants={rotateAnimation}
            animate="animate"
          >
            <Flower2Image />
          </motion.div>
          <Box className="absolute top-[40%] right-[5%] w-full">
            <motion.div
              style={{
                transformOrigin: 'bottom center',
              }}
              variants={rotateAnimation}
              animate="animate"
            >
              <Flower1Image />
            </motion.div>
          </Box>
        </Box>

        {/* top-right */}
        <Box className="absolute top-0 right-0 w-[35%]" style={{ transform: 'translate(30%, -10%) scaleX(-1)' }}>
          <BranchImage />
        </Box>
        <Box className="absolute top-8 right-0 w-[30%]" style={{ transform: 'translate(50%, 0) rotate(-30deg)' }}>
          <motion.div
            style={{
              transformOrigin: 'bottom center',
            }}
            variants={rotateAnimation}
            animate="animate"
          >
            <Flower2Image />
          </motion.div>
          <Box className="absolute top-1/2 -left-[30%] w-full">
            <motion.div
              style={{
                transformOrigin: 'bottom center',
              }}
              variants={rotateAnimation}
              animate="animate"
            >
              <Flower1Image />
            </motion.div>
          </Box>
        </Box>

        {/* bottom-left */}
        <Box className="absolute bottom-8 left-0 w-[70%]" style={{ transform: 'translate(-75%, 0)' }}>
          <TreeImage />
        </Box>
        <Box className="absolute bottom-0 left-4 w-[40%]" style={{ transform: 'translate(-40%, 0)' }}>
          <PineImage />
          <Box className="absolute top-[35%] left-[35%] w-full">
            <PalmImage />
          </Box>
        </Box>
        <Box className="absolute bottom-0 left-0 w-[35%]" style={{ transform: 'translate(-30%, 40%)' }}>
          <Box className="absolute bottom-[60%] right-[25%] w-[80%]">
            <motion.div
              style={{
                transformOrigin: 'bottom center',
              }}
              variants={rotateAnimation}
              animate="animate"
            >
              <Flower2Image />
            </motion.div>
          </Box>
          <motion.div
            style={{
              transformOrigin: 'bottom center',
            }}
            variants={rotateAnimation}
            animate="animate"
          >
            <Flower1Image />
          </motion.div>
          <Box className="absolute top-[25%] left-[60%] w-[80%]">
            <motion.div
              style={{
                transformOrigin: 'bottom center',
              }}
              variants={rotateAnimation}
              animate="animate"
            >
              <Flower3Image />
            </motion.div>
            <Box className="absolute top-[10%] left-1/2 w-full">
              <motion.div
                style={{
                  transformOrigin: 'bottom center',
                }}
                variants={rotateAnimation}
                animate="animate"
              >
                <Flower4Image />
              </motion.div>
            </Box>
          </Box>
        </Box>

        {/* bottom-right */}
        <Box className="absolute bottom-8 right-0 w-[70%]" style={{ transform: 'translate(75%, 0)' }}>
          <TreeImage />
        </Box>
        <Box className="absolute inset-0" style={{ transform: 'scaleX(-1)' }}>
          <Box className="absolute bottom-0 left-4 w-[40%]" style={{ transform: 'translate(-40%, 0)' }}>
            <PineImage />
            <Box className="absolute top-[35%] left-[35%] w-full">
              <PalmImage />
            </Box>
          </Box>
          <Box className="absolute bottom-0 left-0 w-[35%]" style={{ transform: 'translate(-30%, 40%)' }}>
            <Box className="absolute bottom-[60%] right-[25%] w-[80%]">
              <motion.div
                style={{
                  transformOrigin: 'bottom center',
                }}
                variants={rotateAnimation}
                animate="animate"
              >
                <Flower2Image />
              </motion.div>
            </Box>
            <motion.div
              style={{
                transformOrigin: 'bottom center',
              }}
              variants={rotateAnimation}
              animate="animate"
            >
              <Flower1Image />
            </motion.div>
            <Box className="absolute top-[25%] left-[60%] w-[80%]">
              <motion.div
                style={{
                  transformOrigin: 'bottom center',
                }}
                variants={rotateAnimation}
                animate="animate"
              >
                <Flower3Image />
              </motion.div>
              <Box className="absolute top-[10%] left-1/2 w-full">
                <motion.div
                  style={{
                    transformOrigin: 'bottom center',
                  }}
                  variants={rotateAnimation}
                  animate="animate"
                >
                  <Flower4Image />
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="absolute inset-0"></Box>
      <Flex
        py={48}
        px={28}
        className="relative text-center min-h-screen"
        align={'center'}
        justify={'center'}
        direction={'column'}
      >
        <Box className="relative w-[90%]">
          <Box className="relative">
            <Box className="relative w-full">
              <FrameImage className="relative w-full h-auto" />
            </Box>
            <Stack
              className="absolute top-1/2 left-1/2 w-full px-12"
              style={{ transform: 'translate(-50%, -50%)' }}
              align="center"
              gap={16}
            >
              <Box>
                <Text className="!font-gallery" fz={{ base: 42, sm: 46 }} lh={1.2}>
                  Tirta
                </Text>
                <Text className="!font-gallery" fz={20} lh={1.2}>
                  &
                </Text>
                <Text className="!font-gallery" fz={{ base: 42, sm: 46 }} lh={1.2}>
                  Fatih
                </Text>
              </Box>
              <Box>
                <Text className="font-milyuna" fz={{ base: 14, sm: 16 }}>
                  By the love and grace of God, we cordially invite you to celebrate our special day
                </Text>
              </Box>
              {/* <IconChevronsDown size={56} /> */}
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default WelcomeSection;
