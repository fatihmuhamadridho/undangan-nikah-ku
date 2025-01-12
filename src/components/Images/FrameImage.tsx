import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const FrameImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
      style={style}
      src={'/images/frame.webp'}
      alt="frame"
      width={922}
      height={1202}
      draggable={false}
    />
  );
};

export default FrameImage;
