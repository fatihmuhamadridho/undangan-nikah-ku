import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const PalmImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
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
