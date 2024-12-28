import { DEVELOPMENT_HEADER_IMAGE, PRODUCTION_HEADER_IMAGE } from '@/constants/images';
import { BackgroundImage, Box } from '@mantine/core';
import React from 'react';

const HeaderSection = () => {
  const BACKGROUND_IMAGE = process.env.NODE_ENV === 'development' ? DEVELOPMENT_HEADER_IMAGE : PRODUCTION_HEADER_IMAGE;

  return (
    <Box>
      <BackgroundImage className="fixed" src={BACKGROUND_IMAGE} w={'60%'} h={'100vh'}></BackgroundImage>
    </Box>
  );
};

export default HeaderSection;
