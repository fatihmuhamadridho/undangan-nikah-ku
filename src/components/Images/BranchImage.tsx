import Image from 'next/image';
import React from 'react';

interface ImagesProps {
  className?: string;
  flip?: 'horizontal' | 'vertical';
}

const BranchImage = (props: ImagesProps) => {
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
      src={'/images/branch.webp'}
      alt="branch"
      width={484}
      height={681}
      draggable={false}
    />
  );
};

export default BranchImage;
