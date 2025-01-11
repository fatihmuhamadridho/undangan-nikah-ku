import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const Flower1Image = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
      style={style}
      src={'/images/flower-1.webp'}
      alt="flower-1"
      width={413}
      height={577}
      draggable={false}
    />
  );
};

export default Flower1Image;
