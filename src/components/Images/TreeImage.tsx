import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface ImagesProps {
  className?: string;
  style?: CSSProperties;
}

const TreeImage = (props: ImagesProps) => {
  const { className, style } = props;

  return (
    <Image
      className={className}
      style={style}
      src={'/images/tree.webp'}
      alt="tree"
      width={871}
      height={1087}
      draggable={false}
    />
  );
};

export default TreeImage;
