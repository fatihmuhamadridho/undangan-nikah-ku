import Image from 'next/image';
import React from 'react';

interface ImagesProps {
  className?: string;
  flip?: 'horizontal' | 'vertical';
}

const Flower2Image = (props: ImagesProps) => {
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
      src={'/images/flower-2.webp'}
      alt="flower-2"
      width={378}
      height={558}
      draggable={false}
    />
  );
};

export default Flower2Image;
