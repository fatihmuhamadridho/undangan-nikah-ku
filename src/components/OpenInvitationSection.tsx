import { Box, Flex, Text, UnstyledButton } from '@mantine/core';
import { IconMailOpened } from '@tabler/icons-react';
import React from 'react';
import MountainImage from './Images/MountainImage';

interface OpenInvitationSectionProps {
  handleOpen: () => void;
}

const OpenInvitationSection = (props: OpenInvitationSectionProps) => {
  const { handleOpen } = props;
  return (
    <Box className="px-[1.8rem]">
      <Flex style={{ position: 'relative', height: '100vh' }} py={80} align={'end'} justify={'center'}>
        <Box
          style={{ position: 'relative', borderRadius: 20, overflow: 'hidden' }}
          w={{ lg: '40%', xs: '60%', base: '100%' }}
          px={32}
          py={48}
          bg={'#e5f6f3'}
        >
          <Box style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
            <Box
              style={{
                width: '140%',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                height: '100%',
                transform: 'translate(-50%, -160%)',
              }}
            >
              <Box style={{ height: '100%' }}>
                <MountainImage style={{ opacity: 0.4, objectPosition: '50% 50%' }} />
              </Box>
            </Box>
          </Box>
          <Box style={{ position: 'relative' }}>
            <Flex
              style={{ position: 'relative', width: '100%', padding: 16, textAlign: 'center' }}
              direction={'column'}
              align={'center'}
              justify={'center'}
              gap={16}
            >
              <Text fz={{ base: 14, sm: 16 }}>We invite you to The Wedding of</Text>
              <Text className="font-gallery" fz={{ base: 42, sm: 46 }}>
                Fatih & Tirta
              </Text>
              <UnstyledButton
                className="flex items-center justify-center gap-1 rounded-[50px]"
                px={32}
                py={11}
                bg={'#4B5B40'}
                onClick={handleOpen}
              >
                <Text c={'white'}>Open the Invitation</Text>
                <IconMailOpened size={18} color="white" />
              </UnstyledButton>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default OpenInvitationSection;
