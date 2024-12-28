import Image from 'next/image';
import React from 'react';
import MotionImage, { MotionImageProps } from './MotionImage';

const Flower1Image = (props: MotionImageProps) => {
  return (
    <MotionImage {...props}>
      <Image src={'/images/flower-1.webp'} alt="flower-1" width={413} height={577} draggable={false} />
    </MotionImage>
  );
};

export default Flower1Image;
