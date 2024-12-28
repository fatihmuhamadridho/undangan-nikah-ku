import { Box, Center, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const WelcomeSection = () => {
  return (
    <React.Fragment>
      <Center className="!overflow-hidden" h={'100vh'}>
        <Box className="z-20">
          <Text fz={20}>Fatih</Text>
          <Text fz={20}>&</Text>
          <Text fz={20}>Tirta</Text>
          <Text fz={20}>Our Wedding Day</Text>
        </Box>
        <Image
          className="absolute top-[15vh] w-[453px] h-[591px] z-10"
          src={'/images/union-venue.webp'}
          alt="union-venue"
          width={1215}
          height={1926}
        />
        <Box className="absolute w-full h-[318px]">
          <Image className="absolute w-[673px] h-[1068px]" src={'/images/mountain.webp'} alt="union-venue" width={461} height={601} />
        </Box>
      </Center>
    </React.Fragment>
  );
};

export default WelcomeSection;
