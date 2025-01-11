import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  style?: CSSProperties;
}

const BgImage = (props: ImagesProps) => {
  const { style } = props;

  return (
    <Image
      style={style}
      src={'/images/bg.webp'}
      alt="bg"
      width={2268}
      height={1071}
      draggable={false}
    />
  );
};

export default BgImage;
