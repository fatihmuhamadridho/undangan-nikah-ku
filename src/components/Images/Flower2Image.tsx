import Image from 'next/image';
import React from 'react';

interface Flower2ImageProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}

const Flower2Image = (props: Flower2ImageProps) => {
  const { className, width, height, top, right, bottom, left } = props;
  return (
    <Image
      className={className}
      style={{ width, height, top, right, bottom, left }}
      src={'/images/flower-2.webp'}
      alt="flower-left"
      width={378}
      height={558}
      draggable={false}
    />
  );
};

export default Flower2Image;
