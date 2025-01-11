import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const Flower4Image = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
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
