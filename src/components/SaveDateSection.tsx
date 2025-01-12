import { Box, Flex } from '@mantine/core';
import React from 'react';
import MountainImage from './Images/MountainImage';
import Image from 'next/image';
import UnionImage from './Images/UnionImage';

const SaveDateSection = () => {
  return (
    <Box className="relative overflow-hidden" bg={'#9CB29E'}>
      <Box className="relative w-full" pt={80} pb={48}>
        <Box className="absolute inset-0">
          <Box
            className="absolute top-0 left-1/2 w-[120%]"
            style={{ transform: 'translate(-50%, 0)' }}
          >
            <MountainImage />
          </Box>
        </Box>
        <Box className="px-7">
          <Flex justify={'center'} wrap={'wrap'}>
            <Box className="w-full" style={{ flex: '0 0 auto' }}>
              <Box className="relative">
                <Box className="relative w-full">
                  <Box className="pt-[125%] relative w-full h-auto">
                    <Image
                      className="absolute inset-0 w-full h-full overflow-clip"
                      style={{
                        objectFit: 'cover',
                        maskImage: "url('/images/mask.png')",
                        maskPosition: '50% 50%',
                        maskSize: '100% 100%',
                        maskRepeat: 'no-repeat',
                      }}
                      src={'/images/background-2.webp'}
                      alt="background-2"
                      width={1439}
                      height={1080}
                    />
                  </Box>
                  <Box className="absolute inset-0">
                    <Box
                      className="absolute top-1/2 left-1/2"
                      style={{ width: 'calc(100% + 1.5rem)', transform: 'translate(-50%, -50%)' }}
                    >
                      <Box className="pt-[125%] relative w-full h-auto">
                        <UnionImage className="absolute inset-0 w-full h-full" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="reminder-content relative mt-4"></Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SaveDateSection;
