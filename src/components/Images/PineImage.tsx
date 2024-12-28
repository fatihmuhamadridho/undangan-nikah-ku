import Image from 'next/image';
import React from 'react';

interface PineImageProps {
  className?: string;
}

const PineImage = (props: PineImageProps) => {
  const { className } = props;
  return <Image className={className} src={'/images/pine.webp'} alt="pine-left" width={474} height={734} draggable={false} />;
};

export default PineImage;
