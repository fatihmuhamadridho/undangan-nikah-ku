import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const Flower2Image = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
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
