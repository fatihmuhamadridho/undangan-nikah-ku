import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const TendaImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
      style={style}
      src={'/images/tenda.webp'}
      alt="flower-4"
      width={670}
      height={349}
      draggable={false}
    />
  );
};

export default TendaImage;
