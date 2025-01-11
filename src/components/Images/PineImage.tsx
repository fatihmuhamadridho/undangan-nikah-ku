import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  style?: CSSProperties;
}

const PineImage = (props: ImagesProps) => {
  const { style } = props;

  return (
    <Image
      style={style}
      src={'/images/pine.webp'}
      alt="pine"
      width={474}
      height={734}
      draggable={false}
    />
  );
};

export default PineImage;
