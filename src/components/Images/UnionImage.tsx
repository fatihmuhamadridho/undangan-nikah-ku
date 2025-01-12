import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const UnionImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
      style={style}
      src={'/images/union.webp'}
      alt="union"
      width={927}
      height={1179}
      draggable={false}
    />
  );
};

export default UnionImage;
