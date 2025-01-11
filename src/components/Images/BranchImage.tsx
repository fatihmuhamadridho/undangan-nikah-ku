import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const BranchImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
      style={style}
      src={'/images/branch.webp'}
      alt="branch"
      width={484}
      height={681}
      draggable={false}
    />
  );
};

export default BranchImage;
