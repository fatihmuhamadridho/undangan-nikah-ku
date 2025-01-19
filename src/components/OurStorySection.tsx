import { Box } from '@mantine/core';
import React from 'react';
import MountainImage from './Images/MountainImage';
import BranchImage from './Images/BranchImage';
import Flower4Image from './Images/Flower4Image';
import Flower1Image from './Images/Flower1Image';
import Image from 'next/image';

const OurStorySection = () => {
  return (
    <Box className="relative py-[3rem] overflow-hidden">
      <Box className="ornaments-wrapper">
        <Box
          className="absolute top-[3rem] left-1/2 w-full"
          style={{ transform: 'translate(-50%, 0)' }}
        >
          <MountainImage />
        </Box>
      </Box>
      <Box className="ornaments-wrapper absolute inset-0">
        <Box
          className="orn-1 absolute top-0 left-0 w-[35%]"
          style={{ transform: 'translate(-60%, 0) rotate(20deg) scaleX(-1)' }}
        >
          <BranchImage />
          <Box
            className="orn-2 absolute top-[60%] left-[-25%] w-[80%]"
            style={{ transform: 'rotate(10deg)' }}
          >
            <Flower4Image />
          </Box>
        </Box>
        <Box
          className="orn-3 absolute top-0 right-0 w-[35%]"
          style={{ transform: 'translate(60%, 0) rotate(-20deg)' }}
        >
          <BranchImage />
          <Box
            className="orn-4 absolute top-[60%] left-[-15%] w-[80%]"
            style={{ transform: 'rotate(-20deg)' }}
          >
            <Flower1Image />
          </Box>
        </Box>
      </Box>
      <Box className="container px-[1.8rem]">
        <Box className="flex flex-wrap justify-center">
          <Box className="w-[92%]" style={{ flex: '0 0 auto' }}>
            <Box className="image-wrapper relative w-full mb-[2rem]">
              <Box className="pt-[125%] relative w-full h-auto">
                <Image
                  className="object-cover rounded-[300px] absolute top-0 left-0 w-full h-full"
                  src={'/images/background-2.webp'}
                  alt="background-2"
                  width={1439}
                  height={1080}
                />
              </Box>
            </Box>
            <Box className="story-description">
              <Box className="relative w-full text-center mb-[1.25rem]">Our Story</Box>
              <Box className="relative italic text-center">
                Cinta tidak kenal waktu, kondisimu, berapa usiamu, dan siapa kamu. Cinta adalah
                pendekripsian yang tidak ada habisnya. Cinta bukan apa-apa bagi yang tidak pernah
                merasakan. Sebab ia hanya sebuah kata. Mudah di ucap. Namun tidak mudah untuk di
                jelaskan. Cinta itu yang kami rasakan. Cinta itu adalah asal mula. Asal Mula yang
                kami rasakan melalui sebuah jaringan sosial media. Berawal dari Aditya menyapa
                Melissa. Usut punya usut, kedekatan itu pun terjalin hanya melalui sosmed.Disanalah
                kami memulai menulis cerita dalam sebuah buku yang sama merasakan hal yang sama
                tanpa dipaksa. Tepat tanggal 11 bulan Juli Tahun 2012 kami pun menjalin suatu
                ikatan. Kami yakin Allah SWT telah merencanakannya,singkat dan bermakna pendekatan
                yang dilakukan hanya satu minggu.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurStorySection;
