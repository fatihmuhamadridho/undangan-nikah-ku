import { Box } from '@mantine/core';
import React from 'react';
import MountainImage from './Images/MountainImage';
import BranchImage from './Images/BranchImage';
import Flower4Image from './Images/Flower4Image';
import Flower1Image from './Images/Flower1Image';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const OurStorySection = () => {
  const rotateAnimation: Variants = {
    animate: {
      rotate: [
        0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13.5, 14, 13.5, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
        0.5, 0,
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  return (
    <Box className="relative py-[3rem] overflow-hidden">
      <Box className="ornaments-wrapper">
        <Box className="absolute top-[3rem] left-1/2 w-full" style={{ transform: 'translate(-50%, 0)' }}>
          <MountainImage />
        </Box>
      </Box>
      <Box className="ornaments-wrapper absolute inset-0 z-[3]">
        <Box
          className="orn-1 absolute top-0 left-0 w-[35%]"
          style={{ transform: 'translate(-60%, 0) rotate(20deg) scaleX(-1)' }}
        >
          <motion.div
            style={{
              transformOrigin: 'bottom center',
            }}
            variants={rotateAnimation}
            animate="animate"
          >
            <BranchImage />
          </motion.div>
          <Box className="orn-2 absolute top-[60%] left-[-25%] w-[80%]" style={{ transform: 'rotate(10deg)' }}>
            <motion.div
              style={{
                transformOrigin: 'bottom center',
              }}
              variants={rotateAnimation}
              animate="animate"
            >
              <Flower4Image />
            </motion.div>
          </Box>
        </Box>
        <Box className="orn-3 absolute top-0 right-0 w-[35%]" style={{ transform: 'translate(60%, 0) rotate(-20deg)' }}>
          <motion.div
            style={{
              transformOrigin: 'bottom center',
            }}
            variants={rotateAnimation}
            animate="animate"
          >
            <BranchImage />
          </motion.div>
          <Box className="orn-4 absolute top-[60%] left-[-15%] w-[80%]" style={{ transform: 'rotate(-20deg)' }}>
            <motion.div
              style={{
                transformOrigin: 'bottom center',
              }}
              variants={rotateAnimation}
              animate="animate"
            >
              <Flower1Image />
            </motion.div>
          </Box>
        </Box>
      </Box>
      <Box className="container px-[1.8rem] mx-auto">
        <Box className="flex flex-wrap justify-center">
          <Box className="w-[92%]" style={{ flex: '0 0 auto' }}>
            <Box className="image-wrapper relative w-full mb-[2rem]">
              <Box className="pt-[125%] relative w-full h-auto">
                <Image
                  className="object-cover rounded-[300px] absolute top-0 left-0 w-full h-full"
                  style={{ objectPosition: 'left center' }}
                  src={'/images/gallery3/berdua_2.webp'}
                  alt="berdua_2"
                  width={1600}
                  height={1066}
                />
              </Box>
            </Box>
            <Box className="story-description">
              <Box className="relative w-full text-center font-brillion" mb={16} fz={42}>
                Our Story
              </Box>
              <Box className="relative italic text-center font-milyuna" mb={14} fz={14}>
                Perjalanan kami dimulai pada Oktober 2018, dari pertemuan sederhana sebagai kakak dan adik kelas di SMA.
                Sebuah salam yang dititipkan melalui teman menjadi awal dari kisah kami yang penuh makna.
              </Box>
              <Box className="relative italic text-center font-milyuna" mb={14} fz={14}>
                Desember 2020, benih cinta mulai tumbuh. Kami mulai saling mengenal lebih dalam, berbagi cerita, dan
                merasa nyaman melangkah bersama. Kebersamaan kami semakin erat, membawa kami ke perjalanan yang penuh
                warna.
              </Box>
              <Box className="relative italic text-center font-milyuna" mb={14} fz={14}>
                Pada Desember 2024, dengan restu kedua orang tua, ikatan kami dipertegas melalui lamaran yang penuh haru
                dan doa. Momen yang telah lama dinantikan akhirnya tiba, membawa kami ke langkah yang lebih serius.
              </Box>
              <Box className="relative italic text-center font-milyuna" mb={14} fz={14}>
                Dan kini, Februari 2025, tibalah waktunya untuk kami mengikat janji suci dalam ikatan pernikahan,
                menjadi sepasang suami istri. Sebuah babak baru yang siap kami jalani bersama, dengan cinta dan doa yang
                senantiasa menyertai.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurStorySection;
