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
        <Box className="absolute top-[3rem] left-1/2 w-full" style={{ transform: 'translate(-50%, 0)' }}>
          <MountainImage />
        </Box>
      </Box>
      <Box className="ornaments-wrapper absolute inset-0 z-[3]">
        <Box
          className="orn-1 absolute top-0 left-0 w-[35%]"
          style={{ transform: 'translate(-60%, 0) rotate(20deg) scaleX(-1)' }}
        >
          <BranchImage />
          <Box className="orn-2 absolute top-[60%] left-[-25%] w-[80%]" style={{ transform: 'rotate(10deg)' }}>
            <Flower4Image />
          </Box>
        </Box>
        <Box className="orn-3 absolute top-0 right-0 w-[35%]" style={{ transform: 'translate(60%, 0) rotate(-20deg)' }}>
          <BranchImage />
          <Box className="orn-4 absolute top-[60%] left-[-15%] w-[80%]" style={{ transform: 'rotate(-20deg)' }}>
            <Flower1Image />
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
                  src={'/images/gallery3/berdua.webp'}
                  alt="berdua"
                  width={1600}
                  height={1066}
                />
              </Box>
            </Box>
            <Box className="story-description">
              <Box className="relative w-full text-center font-brillion" fz={42}>
                Our Story
              </Box>
              <Box className="relative italic text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam esse officiis nam nesciunt quam atque
                aliquid deserunt dolores tempora eum laboriosam ut fugiat, dolorem, totam fuga perferendis eos vitae
                asperiores quo tempore odit harum doloremque exercitationem praesentium! Laborum dolores deserunt itaque
                nesciunt quam? Facilis blanditiis beatae veniam delectus iusto necessitatibus ipsum, illum ipsa sit
                consectetur cupiditate quibusdam dignissimos cum dolore, quam impedit mollitia, sapiente distinctio
                dolorum tenetur neque praesentium? Inventore obcaecati facilis eos ipsum magni incidunt reprehenderit
                modi animi, odit aspernatur ratione molestias beatae quis dolore culpa ex? Animi voluptates non hic
                dolorum atque aliquid ducimus sint quo recusandae aut quasi et ratione consequuntur illum voluptas, eius
                praesentium molestiae odit assumenda harum porro at! Ratione veniam libero repudiandae excepturi
                laboriosam voluptas beatae harum, quia voluptatum corporis. Harum vel excepturi atque animi! Rerum
                deleniti harum vero, doloremque, in itaque vel aut laborum, porro debitis exercitationem consequuntur
                officia dolor. Eum nam ad voluptatum earum ratione vitae optio debitis corrupti quasi? Labore enim harum
                sapiente excepturi sed, obcaecati alias nobis. Necessitatibus quaerat atque mollitia voluptatum neque
                nostrum alias nisi, dolore fugit facilis cum sequi corrupti beatae ad dignissimos dolorem non error
                veritatis vitae rem quam veniam. Explicabo voluptatibus at distinctio expedita nemo autem!
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurStorySection;
