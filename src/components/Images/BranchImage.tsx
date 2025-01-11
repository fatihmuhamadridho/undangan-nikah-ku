import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  style?: CSSProperties;
}

const BranchImage = (props: ImagesProps) => {
  const { style } = props;

  return (
    <Image
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
