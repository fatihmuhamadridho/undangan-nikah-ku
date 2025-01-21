import { Box } from '@mantine/core';
import React from 'react';
import PalmImage from './Images/PalmImage';
import Flower3Image from './Images/Flower3Image';
import Flower1Image from './Images/Flower1Image';

const GiftSection = () => {
  return (
    <Box className="relative text-center py-[3rem] overflow-hidden">
      <Box className="ornaments-wrapper absolute inset-0">
        <Box
          className="orn-1 absolute top-0 left-0 w-[45%]"
          style={{ transform: 'translate(-70%, 0)' }}
        >
          <PalmImage />
        </Box>
        <Box
          className="orn-2 absolute top-0 right-0 w-[45%]"
          style={{ transform: 'translate(70%, 0)' }}
        >
          <PalmImage />
        </Box>
      </Box>
      <Box className="ornaments-wrapper absolute inset-0 z-[3]">
        <Box
          className="orn-3 absolute top-[3rem] left-0 w-[30%]"
          style={{ transform: 'translate(-50%, 0) rotate(20deg)' }}
        >
          <Flower3Image />
        </Box>
        <Box
          className="orn-4 absolute top-[3rem] right-0 w-[35%]"
          style={{ transform: 'translate(55%, 0) scaleX(-1)' }}
        >
          <Flower1Image />
        </Box>
      </Box>
      <Box className="container px-[1.8rem]">
        <Box className="flex flex-wrap justify-center">
          <Box className="text-center relative w-full" style={{ flex: '0 0 auto' }}>
            <Box className="relative py-[3rem] px-[2rem] bg-[#9CB29E] text-white rounded-[20px] mb-[2rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus sapiente
              tempore debitis ab eius doloribus. Ipsam officia repudiandae voluptate eaque
              voluptates, ad corrupti earum exercitationem voluptas eos possimus nulla suscipit
              adipisci hic. Assumenda repudiandae non, doloribus maiores reprehenderit consectetur
              tempora laborum. Inventore hic, ullam possimus nobis reprehenderit deleniti illo
              officia maiores magni, debitis expedita quaerat voluptatum natus incidunt laboriosam
              vero perferendis similique praesentium quia et saepe? Facilis mollitia consequuntur
              error. Animi culpa optio officia labore voluptatem repellendus sequi nisi non! Vitae
              eaque ut totam iusto. Corporis, dignissimos! Enim officiis amet nam reprehenderit
              excepturi alias ducimus molestias, molestiae id earum?
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box className=''></Box> */}
    </Box>
  );
};

export default GiftSection;
