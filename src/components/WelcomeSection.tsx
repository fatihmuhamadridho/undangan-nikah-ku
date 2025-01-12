import { Box, Flex, Stack, Text } from '@mantine/core';
import React from 'react';
import FrameImage from './Images/FrameImage';
import { IconChevronsDown } from '@tabler/icons-react';
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

const WelcomeSection = () => {
  return (
    <Box className="relative overflow-hidden">
      <Box className="absolute inset-0">
        <Box
          className="absolute bottom-0 left-1/2 w-[120%]"
          style={{ transform: 'translate(-50%, 0)' }}
        >
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
        <Box
          className="absolute top-0 left-0 w-[35%]"
          style={{ transform: 'translate(-30%, -10%)' }}
        >
          <BranchImage />
        </Box>
        <Box className="absolute top-8 left-0 w-[30%]" style={{ transform: 'translate(-50%, 0)' }}>
          <Flower2Image />
          <Box className="absolute top-[40%] right-[5%] w-full">
            <Flower1Image />
          </Box>
        </Box>

        {/* top-right */}
        <Box
          className="absolute top-0 right-0 w-[35%]"
          style={{ transform: 'translate(30%, -10%) scaleX(-1)' }}
        >
          <BranchImage />
        </Box>
        <Box
          className="absolute top-8 right-0 w-[30%]"
          style={{ transform: 'translate(50%, 0) rotate(-30deg)' }}
        >
          <Flower2Image />
          <Box className="absolute top-1/2 -left-[30%] w-full">
            <Flower1Image />
          </Box>
        </Box>

        {/* bottom-left */}
        <Box
          className="absolute bottom-8 left-0 w-[70%]"
          style={{ transform: 'translate(-75%, 0)' }}
        >
          <TreeImage />
        </Box>
        <Box
          className="absolute bottom-0 left-4 w-[40%]"
          style={{ transform: 'translate(-40%, 0)' }}
        >
          <PineImage />
          <Box className="absolute top-[35%] left-[35%] w-full">
            <PalmImage />
          </Box>
        </Box>
        <Box
          className="absolute bottom-0 left-0 w-[35%]"
          style={{ transform: 'translate(-30%, 40%)' }}
        >
          <Box className="absolute bottom-[60%] right-[25%] w-[80%]">
            <Flower2Image />
          </Box>
          <Flower1Image />
          <Box className="absolute top-[25%] left-[60%] w-[80%]">
            <Flower3Image />
            <Box className="absolute top-[10%] left-1/2 w-full">
              <Flower4Image />
            </Box>
          </Box>
        </Box>

        {/* bottom-right */}
        <Box
          className="absolute bottom-8 right-0 w-[70%]"
          style={{ transform: 'translate(75%, 0)' }}
        >
          <TreeImage />
        </Box>
        <Box className="absolute inset-0" style={{ transform: 'scaleX(-1)' }}>
          <Box
            className="absolute bottom-0 left-4 w-[40%]"
            style={{ transform: 'translate(-40%, 0)' }}
          >
            <PineImage />
            <Box className="absolute top-[35%] left-[35%] w-full">
              <PalmImage />
            </Box>
          </Box>
          <Box
            className="absolute bottom-0 left-0 w-[35%]"
            style={{ transform: 'translate(-30%, 40%)' }}
          >
            <Box className="absolute bottom-[60%] right-[25%] w-[80%]">
              <Flower2Image />
            </Box>
            <Flower1Image />
            <Box className="absolute top-[25%] left-[60%] w-[80%]">
              <Flower3Image />
              <Box className="absolute top-[10%] left-1/2 w-full">
                <Flower4Image />
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
                <Text fz={46} lh={1.2}>
                  Fatih
                </Text>
                <Text fz={26} lh={1.2}>
                  &
                </Text>
                <Text fz={46} lh={1.2}>
                  Tirta
                </Text>
              </Box>
              <Box>
                <Text fz={'14pt'}>Our Wedding Day</Text>
              </Box>
              <IconChevronsDown size={56} />
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default WelcomeSection;
