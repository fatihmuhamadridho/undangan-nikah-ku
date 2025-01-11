import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const PineImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
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
