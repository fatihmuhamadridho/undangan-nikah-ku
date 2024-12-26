import { Flex, Text } from '@mantine/core';
import React from 'react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Flex className="sticky z-50" w={'100vw'} h={50} bg={'#4B5B40'} align={'center'} justify={'center'}>
      <Text fz={11} fw={600} c={'white'} ta={'center'}>
        Copyright ©{currentYear} Created with ❤️ by fatihmuhamadridho
      </Text>
    </Flex>
  );
};

export default FooterSection;
