import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  style?: CSSProperties;
}

const Flower2Image = (props: ImagesProps) => {
  const { style } = props;

  return (
    <Image
      style={style}
      src={'/images/flower-2.webp'}
      alt="flower-2"
      width={378}
      height={558}
      draggable={false}
    />
  );
};

export default Flower2Image;
