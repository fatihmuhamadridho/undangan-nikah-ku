import Image from 'next/image';
import React from 'react';

interface PalmImageProps {
  className?: string;
}

const PalmImage = (props: PalmImageProps) => {
  const { className } = props;
  return <Image className={className} src={'/images/palm.webp'} alt="palm-left" width={525} height={1123} draggable={false} />;
};

export default PalmImage;
