import Image from 'next/image';
import React from 'react';

interface ImagesProps {
  className?: string;
  flip?: 'horizontal' | 'vertical';
}

const BgImage = (props: ImagesProps) => {
  const { flip } = props;

  const useClassName = (): string => {
    let className = '';
    if (flip === 'horizontal') {
      className = className + ' -scale-x-100';
    }
    return className;
  };

  return (
    <Image
      className={useClassName()}
      src={'/images/bg.webp'}
      alt="bg"
      width={2268}
      height={1071}
      draggable={false}
    />
  );
};

export default BgImage;
