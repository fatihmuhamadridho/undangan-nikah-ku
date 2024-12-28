import Image from 'next/image';
import React from 'react';

interface BranchImageProps {
  className?: string;
}

const BranchImage = (props: BranchImageProps) => {
  const { className } = props;
  return <Image className={className} src={'/images/branch.webp'} alt="branch-left" width={484} height={681} draggable={false} />;
};

export default BranchImage;
