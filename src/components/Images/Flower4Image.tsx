import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  style?: CSSProperties;
}

const Flower4Image = (props: ImagesProps) => {
  const { style } = props;

  return (
    <Image
      style={style}
      src={'/images/flower-4.webp'}
      alt="flower-4"
      width={347}
      height={475}
      draggable={false}
    />
  );
};

export default Flower4Image;
