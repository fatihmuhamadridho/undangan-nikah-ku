import { BackgroundImage, Box } from '@mantine/core';
import React from 'react';

const HeaderSection = () => {
  return (
    <Box>
      <BackgroundImage className="fixed" src={'/images/background-1.webp'} w={'60%'} h={'100vh'}></BackgroundImage>
    </Box>
  );
};

export default HeaderSection;
