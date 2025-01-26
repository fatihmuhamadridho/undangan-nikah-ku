import { Box, Text } from '@mantine/core';
import React from 'react';
import BranchImage from './Images/BranchImage';
import Flower2Image from './Images/Flower2Image';
import Flower1Image from './Images/Flower1Image';
import PineImage from './Images/PineImage';
import Flower3Image from './Images/Flower3Image';
import Flower4Image from './Images/Flower4Image';
import PalmImage from './Images/PalmImage';

const HeaderSection = () => {
  const BACKGROUND_IMAGE = '/images/gallery3/bg.webp';

  return (
    <Box className="fixed inset-0 block overflow-hidden" w={'61%'} h={'100vh'} visibleFrom="md">
      <Box
        className={`absolute inset-0 w-full h-full top-0 left-0 bg-cover`}
        style={{
          backgroundPosition: 'calc(50% - 24px) center',
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
        }}
      />
      <Box className="absolute inset-0 w-full h-full top-0 left-0 bg-cover bg-black/30"></Box>
      <Box className="absolute inset-0">
        {/* top-left */}
        <Box className="absolute top-0 left-0 w-[25%]" style={{ transform: 'translate(-30%, -10%)' }}>
          <BranchImage className="relative w-full h-auto" />
        </Box>
        <Box className="absolute top-8 left-0 w-[20%]" style={{ transform: 'translate(-50%, 0)' }}>
          <Flower2Image className="relative w-full h-auto" />
          <Box className="absolute top-[40%] right-[5%] w-full">
            <Flower1Image className="relative w-full h-auto" />
          </Box>
        </Box>

        {/* top-right */}
        <Box className="absolute top-0 right-0 w-[25%]" style={{ transform: 'translate(30%, -10%) scaleX(-1)' }}>
          <BranchImage className="relative w-full h-auto" />
        </Box>
        <Box className="absolute top-8 right-0 w-[20%]" style={{ transform: 'translate(50%, 0) rotate(-30deg)' }}>
          <Flower2Image className="relative w-full h-auto" />
          <Box className="absolute top-[50%] -left-[30%] w-full">
            <Flower1Image className="relative w-full h-auto" />
          </Box>
        </Box>

        {/* bottom-left */}
        <Box className="absolute bottom-0 left-4 w-[30%]" style={{ transform: 'translate(-40%, 0)' }}>
          <PineImage className="relative w-full h-auto" />
          <Box className="absolute top-[35%] left-[35%] w-full">
            <PalmImage />
          </Box>
        </Box>
        <Box className="absolute bottom-0 left-0 w-[23%]" style={{ transform: 'translate(-30%, 40%)' }}>
          <Box className="absolute bottom-[60%] right-[25%] w-[80%]">
            <Flower2Image className="relative w-full h-auto" />
          </Box>
          <Flower1Image className="relative w-full h-auto" />
          <Box className="absolute top-[25%] left-[60%] w-[80%]">
            <Flower3Image className="relative w-full h-auto" />
            <Box className="absolute top-[10%] left-[50%] w-full">
              <Flower4Image className="relative w-full h-auto" />
            </Box>
          </Box>
        </Box>

        {/* bottom-right */}
        <Box className="absolute bottom-0 right-4 w-[30%]" style={{ transform: 'translate(40%, 0) scaleX(-1)' }}>
          <PineImage className="relative w-full h-auto" />
          <Box className="absolute top-[35%] left-[35%] w-full">
            <PalmImage />
          </Box>
        </Box>
        <Box className="absolute bottom-0 right-0 w-[23%]" style={{ transform: 'translate(30%, 40%) scaleX(-1)' }}>
          <Box className="absolute bottom-[60%] right-[25%] w-[80%]">
            <Flower2Image className="relative w-full h-auto" />
          </Box>
          <Flower1Image className="relative w-full h-auto" />
          <Box className="absolute top-[25%] left-[60%] w-[80%]">
            <Flower3Image className="relative w-full h-auto" />
            <Box className="absolute top-[10%] left-[50%] w-full">
              <Flower4Image className="relative w-full h-auto" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            textAlign: 'center',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            color: 'white',
          }}
        >
          <Text className="font-gallery" fz={{ base: 42, sm: 46 }} lh={1.2}>
            Tirta
          </Text>
          <Text className="font-gallery" fz={26} lh={1.2}>
            &
          </Text>
          <Text className="font-gallery" fz={{ base: 42, sm: 46 }} lh={1.2}>
            Fatih
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderSection;
