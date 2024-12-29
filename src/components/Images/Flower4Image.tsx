import Image from 'next/image';
import React from 'react';

interface ImagesProps {
  className?: string;
  flip?: 'horizontal' | 'vertical';
}

const Flower4Image = (props: ImagesProps) => {
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
      src={'/images/flower-4.webp'}
      alt="flower-4"
      width={347}
      height={475}
      draggable={false}
    />
  );
};

export default Flower4Image;
