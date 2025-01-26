import { Box, Flex, Text, UnstyledButton } from '@mantine/core';
import { IconMailOpened } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import MountainImage from './Images/MountainImage';
import { useRouter } from 'next/router';

interface OpenInvitationSectionProps {
  handleOpen: () => void;
}

const OpenInvitationSection = (props: OpenInvitationSectionProps) => {
  const { handleOpen } = props;
  const [userAgent, setUserAgent] = useState<string>('');
  const [height, setHeight] = useState<string>('100vh');
  const router = useRouter();
  const { to } = router.query;

  useEffect(() => {
    if (userAgent === '') {
      const target = navigator.userAgent;
      setUserAgent(target);
      if (/iphone/i.test(target)) {
        setHeight('85vh');
      }
    }
  }, [userAgent]);

  return (
    <Box className="px-[1.8rem]">
      <Flex style={{ position: 'relative', height: height }} py={80} align={'end'} justify={'center'}>
        <Box
          className="!bg-main"
          style={{ position: 'relative', borderRadius: 20, overflow: 'hidden' }}
          w={{ lg: '40%', xs: '60%', base: '100%' }}
          px={32}
          py={48}
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
          {userAgent && (
            <Box style={{ position: 'relative' }}>
              <Flex
                style={{ position: 'relative', width: '100%', padding: 16, textAlign: 'center' }}
                direction={'column'}
                align={'center'}
                justify={'center'}
                gap={16}
              >
                <Text fz={{ base: 14, sm: 16 }}>
                  {to !== '' && to ? 'Kepada Bapak / Ibu / Saudara/i' : 'We invite you to The Wedding of'}
                </Text>
                <Text
                  className="font-gallery"
                  fz={to !== '' && to ? { base: 28, sm: 32 } : { base: 42, sm: 46 }}
                  tt={'capitalize'}
                >
                  {to !== '' && to ? to?.toString() : 'Tirta & Fatih'}
                </Text>
                <UnstyledButton
                  className="flex items-center justify-center gap-1 rounded-[50px] !bg-secondary"
                  px={32}
                  py={11}
                  onClick={handleOpen}
                >
                  <Text c={'white'}>Open the Invitation</Text>
                  <IconMailOpened size={18} color="white" />
                </UnstyledButton>
              </Flex>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default OpenInvitationSection;
