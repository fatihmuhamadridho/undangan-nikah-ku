import { Box, Text } from '@mantine/core';
import React from 'react';
import MountainImage from './Images/MountainImage';
import Flower2Image from './Images/Flower2Image';
import TreeImage from './Images/TreeImage';
import PineImage from './Images/PineImage';

const ApologySection = () => {
  return (
    <Box className="relative py-[3rem] overflow-hidden">
      <Box className="ornaments-wrapper absolute inset-0">
        <Box
          className="elements-wrapper-absolute absolute bottom-0 left-1/2 w-full h-full"
          style={{ transform: 'translate(-50%, 0)' }}
        >
          <Box className="h-full">
            <MountainImage
              className="w-full h-full"
              style={{
                objectPosition: '50% 0%',
                opacity: 0.3,
                objectFit: 'cover',
                verticalAlign: 'middle',
                overflowClipMargin: 'content-box',
                overflow: 'clip',
              }}
            />
          </Box>
        </Box>
        <Box
          className="orn-1 absolute top-[1rem] left-0 w-[25%]"
          style={{ transform: 'translate(-50%, 0)' }}
        >
          <Flower2Image />
        </Box>
        <Box
          className="orn-2 absolute top-0 right-0 w-[25%]"
          style={{ transform: 'translate(60%, 0) rotate(-20deg)' }}
        >
          <Flower2Image />
        </Box>
        <Box
          className="tree-1 absolute bottom-0 left-0 w-[45%]"
          style={{ transform: 'translate(-80%, 10%)' }}
        >
          <TreeImage />
        </Box>
        <Box
          className="tree-2 absolute bottom-0 right-0 w-[40%]"
          style={{ transform: 'translate(80%, 0)' }}
        >
          <TreeImage />
        </Box>
        <Box
          className="orn-3 absolute bottom-0 left-0 w-[35%]"
          style={{ transform: 'translate(-70%, 1.5rem)' }}
        >
          <PineImage />
        </Box>
        <Box
          className="orn-4 absolute bottom-0 right-0 w-[35%]"
          style={{ transform: 'translate(70%, 1.5rem)' }}
        >
          <PineImage />
        </Box>
      </Box>
      <Box className="container relative px-[1.8rem] min-h-[200px]">
        <Box className="flex flex-wrap justify-center">
          <Box className="text-center relative w-full" style={{ flex: '0 0 auto' }}>
            <Box className="relative">
              <Box className="title-section has-animate">
                <Text fz={38}>Apology</Text>
              </Box>
              <Box className="w-[92%] mx-auto">
                <Text>
                  Tanpa mengurangi rasa hormat, Izinkan kami mengharapkan kehadiran
                  Bapak/lbu/Saudara/i melalui undangan digital ini, serta dapat memberikan doa restu
                  kepada kami.
                </Text>
                <Text>Terima kasih.</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ApologySection;
