import { Box, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const SplashScreen = () => {
  return (
    <Box className="fixed" w={'100vw'} h={'100vh'}>
      <Image className="fixed !w-[1920px] !h-[1280px] opacity-30" src={'/images/bg.webp'} alt="bg" width={2268} height={1071} />
      <Image
        className="absolute top-[70px] -left-[40px] w-[172px] h-[255px] z-10"
        src={'/images/flower-2.webp'}
        alt="flower-left"
        width={378}
        height={558}
        draggable={false}
      />
      <Image
        className="absolute -top-[20px] -left-[40px] rotate-[10deg] w-[216px] h-[303px]"
        src={'/images/branch.webp'}
        alt="branch-left"
        width={484}
        height={681}
        draggable={false}
      />
      <Image
        className="absolute top-[70px] -right-[40px] -scale-x-100 w-[172px] h-[255px] z-10"
        src={'/images/flower-2.webp'}
        alt="flower-right"
        width={378}
        height={558}
        draggable={false}
      />
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
