import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const Flower3Image = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
      style={style}
      src={'/images/flower-3.webp'}
      alt="flower-3"
      width={353}
      height={330}
      draggable={false}
    />
  );
};

export default Flower3Image;
