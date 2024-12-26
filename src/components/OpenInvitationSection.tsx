import { Flex, UnstyledButton } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

interface OpenInvitationSectionProps {
  handleOpen: () => void;
}

const OpenInvitationSection = (props: OpenInvitationSectionProps) => {
  const { handleOpen } = props;
  return (
    <Flex
      className="absolute mx-auto left-0 right-0 bottom-20 rounded-[20px] overflow-hidden z-20 bg-white"
      align={'center'}
      justify={'center'}
      w={504}
      h={293}
    >
      <Image className="absolute w-[706px] h-[293px]" src={'/images/mountain.webp'} alt="mountain" width={461} height={601} />
      <UnstyledButton className="absolute !text-white rounded-full z-20" px={16} py={6} bg={'#4b5b40'} onClick={handleOpen}>
        Open the invitation
      </UnstyledButton>
    </Flex>
  );
};

export default OpenInvitationSection;
