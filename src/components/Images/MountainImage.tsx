import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  style?: CSSProperties;
}

const MountainImage = (props: ImagesProps) => {
  const { style } = props;

  return (
    <Image
      style={style}
      src={'/images/mountain.webp'}
      alt="mountain"
      width={1215}
      height={1926}
      draggable={false}
    />
  );
};

export default MountainImage;
