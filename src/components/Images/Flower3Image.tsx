import Image from 'next/image';
import React from 'react';

interface ImagesProps {
  className?: string;
  flip?: 'horizontal' | 'vertical';
}

const Flower3Image = (props: ImagesProps) => {
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
      src={'/images/flower-3.webp'}
      alt="flower-3"
      width={353}
      height={330}
      draggable={false}
    />
  );
};

export default Flower3Image;
