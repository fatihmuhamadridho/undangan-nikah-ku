import { Box, Text, UnstyledButton } from '@mantine/core';
import React from 'react';
import PalmImage from './Images/PalmImage';
import Flower3Image from './Images/Flower3Image';
import Flower1Image from './Images/Flower1Image';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const GiftSection = () => {
  const rotateAnimation: Variants = {
    animate: {
      rotate: [
        0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13.5, 14, 13.5, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
        0.5, 0,
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };
  const LIST_GIFT_PROVIDER = [
    {
      provider: 'BANK BCA',
      target: '6565280655',
      owner: 'Tirta Puspitasari',
      icon: '/images/logo-bca.png',
    },
    {
      provider: 'BANK PERMATA',
      target: '009931536394',
      owner: 'Fatih Muhamad Ridho',
      icon: '/images/logo-permata.png',
    },
  ];

  const handleCopyText = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Text copied to clipboard!');
  };

  return (
    <Box className="relative text-center py-[3rem] overflow-hidden">
      <Box className="ornaments-wrapper absolute inset-0">
        <Box className="orn-1 absolute top-0 left-0 w-[45%]" style={{ transform: 'translate(-70%, 0)' }}>
          <PalmImage />
        </Box>
        <Box className="orn-2 absolute top-0 right-0 w-[45%]" style={{ transform: 'translate(70%, 0)' }}>
          <PalmImage />
        </Box>
      </Box>
      <Box className="ornaments-wrapper absolute inset-0 z-[3]">
        <Box
          className="orn-3 absolute top-[3rem] left-0 w-[30%]"
          style={{ transform: 'translate(-50%, 0) rotate(20deg)' }}
        >
          <motion.div
            style={{
              transformOrigin: 'bottom center',
            }}
            variants={rotateAnimation}
            animate="animate"
          >
            <Flower3Image />
          </motion.div>
        </Box>
        <Box
          className="orn-4 absolute top-[3rem] right-0 w-[35%]"
          style={{ transform: 'translate(55%, 0) scaleX(-1)' }}
        >
          <motion.div
            style={{
              transformOrigin: 'bottom center',
            }}
            variants={rotateAnimation}
            animate="animate"
          >
            <Flower1Image />
          </motion.div>
        </Box>
      </Box>
      <Box className="container mx-auto" px={{ base: '1rem', sm: '1.8rem' }}>
        <Box className="flex flex-wrap justify-center">
          <Box className="text-left relative w-full" style={{ flex: '0 0 auto' }}>
            <Box className="relative py-[3rem] px-[2rem] !bg-primary rounded-[20px]">
              <Box className="relative w-full text-center mb-[0.5rem]">
                <Text className="font-gallery" fz={34} fw={500} c={'white'}>
                  Wedding Gift
                </Text>
              </Box>
              <Box className="px-[1rem] mb-[1.25rem]">
                <Text c={'white'} ta={'center'}>
                  Bapak/Ibu/Saudara yang berkenan memberikan tanda kasih dapat melakukannya melalui informasi di bawah.
                  Kami mengucapkan terima kasih atas doa dan dukungannya. Semoga kebaikan ini membawa berkah bagi kita
                  semua.
                </Text>
              </Box>
              <Box className="w-full text-black flex flex-col items-center gap-4">
                {LIST_GIFT_PROVIDER.map((item, index: number) => (
                  <Box
                    key={index}
                    className="rounded-[1rem] w-full max-w-[320px] p-[1rem]"
                    style={{
                      background:
                        'linear-gradient(113deg, rgb(217, 217, 217) 0%, rgb(255, 255, 255) 23%, rgb(229, 229, 229) 31%, rgb(253, 253, 253) 61%, rgb(186, 186, 186) 100%)',
                    }}
                  >
                    <Box className="mb-2">{item.provider}</Box>
                    <Box className="flex items-center justify-between mb-3">
                      <Box
                        style={{
                          position: 'relative',
                          width: 70,
                          height: 50,
                          borderRadius: '0.5rem',
                          overflow: 'hidden',
                          background:
                            'linear-gradient(113deg, rgb(213, 172, 63) 0%, rgb(255, 224, 136) 50%, rgb(193, 140, 1) 100%)',
                        }}
                      >
                        <Box
                          style={{
                            position: 'absolute',
                            height: 1,
                            backgroundColor: 'rgb(161, 119, 18)',
                            left: 0,
                            right: 0,
                            top: '25%',
                            borderRadius: '0.5rem',
                          }}
                        />{' '}
                        <Box
                          style={{
                            position: 'absolute',
                            height: 1,
                            backgroundColor: 'rgb(161, 119, 18)',
                            left: 0,
                            right: 0,
                            bottom: '25%',
                            borderRadius: '0.5rem',
                          }}
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            height: 1,
                            backgroundColor: 'rgb(161, 119, 18)',
                            left: '70%',
                            right: 0,
                            bottom: '50%',
                            borderRadius: '0.5rem',
                          }}
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            height: 1,
                            backgroundColor: 'rgb(161, 119, 18)',
                            left: 0,
                            right: '70%',
                            bottom: '50%',
                            borderRadius: '0.5rem',
                          }}
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            width: 1,
                            backgroundColor: 'rgb(161, 119, 18)',
                            top: 0,
                            bottom: 0,
                            right: '30%',
                            borderRadius: '0.5rem',
                          }}
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            width: 1,
                            backgroundColor: 'rgb(161, 119, 18)',
                            top: 0,
                            bottom: 0,
                            left: '30%',
                            borderRadius: '0.5rem',
                          }}
                        />
                      </Box>
                      <Box className="w-[90px] h-[50px] rounded-[0.5rem] overflow-hidden !bg-white">
                        <Image
                          className="w-full h-full object-cover"
                          src={item.icon}
                          alt="logo-icon"
                          width={720}
                          height={450}
                        />
                      </Box>
                    </Box>
                    <Box className="flex items-center gap-2">
                      <Box fz={18} fw={700}>
                        {item.target}
                      </Box>
                      <UnstyledButton
                        className="z-10 !py-[0.25rem] !px-[0.5rem] !bg-secondary !text-white rounded-[4px]"
                        onClick={() => handleCopyText(item.target)}
                        fz={12}
                      >
                        Salin
                      </UnstyledButton>
                    </Box>
                    <Box fz={14}>{item.owner}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box className=''></Box> */}
    </Box>
  );
};

export default GiftSection;
