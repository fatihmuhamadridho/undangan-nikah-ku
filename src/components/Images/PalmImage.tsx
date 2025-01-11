import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  style?: CSSProperties;
}

const PalmImage = (props: ImagesProps) => {
  const { style } = props;

  return (
    <Image
      style={style}
      src={'/images/palm.webp'}
      alt="palm"
      width={525}
      height={1123}
      draggable={false}
    />
  );
};

export default PalmImage;
