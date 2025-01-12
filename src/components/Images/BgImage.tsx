import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const BgImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
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
