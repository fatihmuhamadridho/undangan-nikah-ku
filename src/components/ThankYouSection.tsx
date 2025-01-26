import { Box, Text } from '@mantine/core';
import React from 'react';
import BgImage from './Images/BgImage';
import MountainImage from './Images/MountainImage';
import BranchImage from './Images/BranchImage';
import TreeImage from './Images/TreeImage';
import Flower2Image from './Images/Flower2Image';
import Flower1Image from './Images/Flower1Image';
import PineImage from './Images/PineImage';
import PalmImage from './Images/PalmImage';
import Flower3Image from './Images/Flower3Image';
import Flower4Image from './Images/Flower4Image';
import Image from 'next/image';
import UnionImage from './Images/UnionImage';

const ThankYouSection = () => {
  return (
    <Box className="relative py-[3rem] text-center overflow-hidden">
      <Box className="ornaments-wrapper absolute inset-0">
        <Box className="absolute bottom-0 left-1/2 w-[120%]" style={{ transform: 'translate(-50%, 0)' }}>
          <Box
            className="bg-2 absolute bottom-0 left-1/2 w-full"
            style={{ transform: 'translate(-50%, 35%)', opacity: 0.6 }}
          >
            <MountainImage />
          </Box>
          <Box className="relative w-full h-auto">
            <BgImage />
          </Box>
        </Box>
      </Box>
      <Box className="ornaments-wrapper absolute inset-0">
        <Box className="orn-1 absolute top-0 left-0 w-[35%]" style={{ transform: 'translate(-30%, -10%)' }}>
          <BranchImage />
        </Box>
        <Box className="orn-2 absolute top-0 right-0 w-[35%]" style={{ transform: 'translate(30%, -10%) scaleX(-1)' }}>
          <BranchImage />
        </Box>
        <Box className="tree-1 absolute bottom-[2rem] left-0 w-[70%]" style={{ transform: 'translate(-65%, 0)' }}>
          <TreeImage />
        </Box>
        <Box className="tree-2 absolute bottom-[2rem] right-0 w-[70%]" style={{ transform: 'translate(75%, 0)' }}>
          <TreeImage />
        </Box>
        <Box className="orn-3 absolute top-[2rem] left-0 w-[30%]" style={{ transform: 'translate(-50%, 0)' }}>
          <Flower2Image />
          <Box className="absolute top-[40%] right-[5%] w-full">
            <Flower1Image />
          </Box>
        </Box>
        <Box
          className="orn-5 absolute top-[2rem] right-0 w-[30%]"
          style={{ transform: 'translate(50%, 0) rotate(-30deg)' }}
        >
          <Flower2Image />
          <Box className="absolute top-1/2 left-[-30%] w-full">
            <Flower1Image />
          </Box>
        </Box>
        <Box className="orn-7 absolute bottom-0 left-[1rem] w-[40%]" style={{ transform: 'translate(-40%, 0)' }}>
          <PineImage />
          <Box className="absolute top-[35%] left-[35%] w-full">
            <PalmImage />
          </Box>
        </Box>
        <Box className="orn-9 absolute bottom-0 left-0 w-[30%]" style={{ transform: 'translate(-30%, 40%)' }}>
          <Box className="orn-10 absolute bottom-[60%] right-1/4 w-[80%]">
            <Flower2Image />
          </Box>
          <Flower1Image />
          <Box className="orn-11 absolute top-1/4 left-[60%] w-[80%]">
            <Flower3Image />
            <Box className="absolute top-[10%] left-1/2 w-full">
              <Flower4Image />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="ornaments-wrapper absolute inset-0" style={{ transform: 'scaleX(-1)' }}>
        <Box className="absolute bottom-0 left-[1rem] w-[40%]" style={{ transform: 'translate(-40%, 0)' }}>
          <PineImage />
          <Box className="absolute top-[35%] left-[35%] w-full">
            <PalmImage />
          </Box>
        </Box>
        <Box className="absolute bottom-0 left-0 w-[30%]" style={{ transform: 'translate(-30%, 40%)' }}>
          <Box className="absolute bottom-[60%] right-1/4 w-[80%]">
            <Flower3Image />
          </Box>
          <Flower1Image />
          <Box className="absolute top-1/4 left-[60%] w-[80%]">
            <Flower3Image />
            <Box className="absolute top-[10%] left-1/2 w-full">
              <Flower4Image />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="container relative px-[1.8rem] mx-auto">
        <Box className="relative w-full" style={{ flex: '0 0 auto' }}>
          <Box>
            <Box className="relative w-[80%] mx-auto">
              <Box className="relative w-full h-auto">
                <Box className="pt-[125%] relative w-full h-auto">
                  <Image
                    className="absolute top-0 left-0 w-full h-full"
                    src={'/images/gallery3/berdua.webp'}
                    alt="berdua"
                    width={1600}
                    height={1066}
                    style={{
                      objectFit: 'cover',
                      maskImage: "url('/images/mask.png')",
                      maskPosition: '50% 50%',
                      maskSize: '100% 100%',
                      maskRepeat: 'no-repeat',
                      overflowClipMargin: 'content-box',
                      overflow: 'clip',
                    }}
                  />
                </Box>
              </Box>
              <Box className="z-[9999] absolute inset-0">
                <Box
                  className="absolute top-1/2 left-1/2"
                  style={{ width: 'calc(100% + 1.5rem)', transform: 'translate(-50%, -50%)' }}
                >
                  <Box className="pt-[125%] relative w-full h-auto">
                    <UnionImage
                      className="absolute top-0 left-0 w-full h-full"
                      style={{
                        mask: 'unset',
                        objectFit: 'fill',
                        overflowClipMargin: 'content-box',
                        overflow: 'clip',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="thank relative py-[3rem] px-[2rem] mb-[5rem] text-black before:absolute before:inset-0 before:bg-white before:rounded-[300px] before:opacity-[0.2] before:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[300px] after:opacity-[0.6] after:content-[''] after:shadow-[0_0_1rem_rgba(0,0,0,0)]">
              <Box className="pt-[2rem]">
                <Box className="title-section relative w-full text-center mb-[1.25rem]">
                  <Text fz={38}>Thank You</Text>
                </Box>
                <Box className="relative">
                  Kami mengucapkan terimakasih kepada Bapak/Ibu/Saudara yang telah menghadiri seluruh rangkaian acara
                  pernikahan kami. Semoga waktu yang diberikan oleh Bapak/Ibu/Saudara sekalian menjadi berkah dan
                  manfaat yang kelak dibalas oleh Tuhan Yang Maha Esa. Terima kasih atas seluruh ucapan yang diberikan.
                  Semoga kami menjadi pasangan yang berbahagia dunia dan akhirat :)
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThankYouSection;
