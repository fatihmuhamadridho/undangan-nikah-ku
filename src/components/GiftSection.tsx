/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Text, UnstyledButton } from '@mantine/core';
import React from 'react';
import PalmImage from './Images/PalmImage';
import Flower3Image from './Images/Flower3Image';
import Flower1Image from './Images/Flower1Image';
import Image from 'next/image';

const GiftSection = () => {
  return (
    <Box className="relative text-center py-[3rem] overflow-hidden">
      <Box className="ornaments-wrapper absolute inset-0">
        <Box
          className="orn-1 absolute top-0 left-0 w-[45%]"
          style={{ transform: 'translate(-70%, 0)' }}
        >
          <PalmImage />
        </Box>
        <Box
          className="orn-2 absolute top-0 right-0 w-[45%]"
          style={{ transform: 'translate(70%, 0)' }}
        >
          <PalmImage />
        </Box>
      </Box>
      <Box className="ornaments-wrapper absolute inset-0 z-[3]">
        <Box
          className="orn-3 absolute top-[3rem] left-0 w-[30%]"
          style={{ transform: 'translate(-50%, 0) rotate(20deg)' }}
        >
          <Flower3Image />
        </Box>
        <Box
          className="orn-4 absolute top-[3rem] right-0 w-[35%]"
          style={{ transform: 'translate(55%, 0) scaleX(-1)' }}
        >
          <Flower1Image />
        </Box>
      </Box>
      <Box className="container px-[1.8rem] mx-auto">
        <Box className="flex flex-wrap justify-center">
          <Box className="text-left relative w-full" style={{ flex: '0 0 auto' }}>
            <Box className="relative py-[3rem] px-[2rem] bg-[#9CB29E] rounded-[20px]">
              <Box className="relative w-full text-center mb-[1.25rem]">
                <Text fz={38} fw={500} c={'white'}>
                  E-Gift
                </Text>
              </Box>
              <Box className="px-[1rem] mb-[1rem]">
                <Text c={'white'} ta={'center'}>
                  Bapak/Ibu/Saudara sekalian dapat memberikan hadiah digital kepada kami melalui
                  form dibawah. Bagi yang telah mengisi dan memberikan hadiah kepada kami, kami
                  mengucapkan banyak terimakasih. Semoga hadiah dari Bapak/Ibu/Saudara dapat
                  bermanfaat bagi kami dalam mengarungi bahtera rumah tangga
                </Text>
              </Box>
              <Box className="w-full text-black flex flex-col items-center gap-4">
                {[1, 2].map((_: any, index: number) => (
                  <Box
                    key={index}
                    className="rounded-[1rem] w-full max-w-[320px] p-[1rem]"
                    style={{
                      background:
                        'linear-gradient(113deg, rgb(217, 217, 217) 0%, rgb(255, 255, 255) 23%, rgb(229, 229, 229) 31%, rgb(253, 253, 253) 61%, rgb(186, 186, 186) 100%)',
                    }}
                  >
                    <Box className="mb-2">BANK BRI</Box>
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
                      <Box className="w-[90px] h-[50px] rounded-[0.5rem] overflow-hidden bg-white">
                        <Image
                          className="w-full h-full object-cover"
                          src={'/images/logo-bri-1688609239.jpg'}
                          alt="logo-bri-1688609239"
                          width={720}
                          height={450}
                        />
                      </Box>
                    </Box>
                    <Box className="flex items-center gap-2">
                      <Box fz={18} fw={700}>
                        630001021959535
                      </Box>
                      <UnstyledButton className="z-10">Salin</UnstyledButton>
                    </Box>
                    <Box fz={14}>Eka Yulia Rohmah</Box>
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
