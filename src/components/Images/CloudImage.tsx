import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const CloudImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
      style={style}
      src={'/images/cloud.webp'}
      alt="palm"
      width={551}
      height={303}
      draggable={false}
    />
  );
};

export default CloudImage;
