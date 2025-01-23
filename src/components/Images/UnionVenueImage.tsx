import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const UnionVenueImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
      style={style}
      src={'/images/union-venue.webp'}
      alt="union-venue"
      width={461}
      height={601}
      draggable={false}
    />
  );
};

export default UnionVenueImage;
