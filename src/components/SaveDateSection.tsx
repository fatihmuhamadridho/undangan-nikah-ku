import { Center } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const SaveDateSection = () => {
  return (
    <Center className="" h={'100vh'} bg={'#9CB29E'}>
      <Image
        className="absolute w-[528px] h-[660px]"
        src={'/images/union.webp'}
        alt="union"
        width={927}
        height={1179}
      />
    </Center>
  );
};

export default SaveDateSection;
