import { Box, Flex, Text, UnstyledButton } from '@mantine/core';
import React from 'react';
import MountainImage from './Images/MountainImage';
import Image from 'next/image';
import UnionImage from './Images/UnionImage';
import BranchImage from './Images/BranchImage';
import Flower4Image from './Images/Flower4Image';
import Flower3Image from './Images/Flower3Image';
import Flower2Image from './Images/Flower2Image';
import Flower1Image from './Images/Flower1Image';
import CloudImage from './Images/CloudImage';
import { IconBrandInstagram } from '@tabler/icons-react';

const SaveDateSection = () => {
  return (
    <Box className="relative pb-[3rem] overflow-hidden" bg={'#9CB29E'}>
      <Box className="relative w-full" pt={80} pb={48}>
        <Box className="absolute inset-0">
          <Box className="absolute top-0 left-1/2 w-[120%]" style={{ transform: 'translate(-50%, 0)' }}>
            <MountainImage />
          </Box>
          <Box className="absolute top-0 left-0 w-[35%]" style={{ transform: 'translate(-65%, 0)' }}>
            <BranchImage />
          </Box>
          <Box className="absolute top-0 right-0 w-[35%]" style={{ transform: 'translate(65%, 0) rotate(-35deg)' }}>
            <BranchImage />
          </Box>
        </Box>
        <Box className="px-7">
          <Flex justify={'center'} wrap={'wrap'}>
            <Box className="w-full" style={{ flex: '0 0 auto' }}>
              <Box className="relative">
                <Box className="image-wrapper relative w-full">
                  <Box className="pt-[125%] relative w-full h-auto">
                    <Image
                      className="absolute inset-0 w-full h-full overflow-clip"
                      style={{
                        objectFit: 'cover',
                        maskImage: "url('/images/mask.png')",
                        maskPosition: '50% 50%',
                        maskSize: '100% 100%',
                        maskRepeat: 'no-repeat',
                      }}
                      src={'/images/background-2.webp'}
                      alt="background-2"
                      width={1439}
                      height={1080}
                    />
                  </Box>
                  <Box className="absolute inset-0">
                    <Box
                      className="absolute top-1/2 left-1/2"
                      style={{ width: 'calc(100% + 1.5rem)', transform: 'translate(-50%, -50%)' }}
                    >
                      <Box className="pt-[125%] relative w-full h-auto">
                        <UnionImage className="absolute inset-0 w-full h-full" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="ornaments-wrapper absolute inset-0">
                  <Box
                    className="orn-3 absolute bottom-[-2.5rem] right-1/2 w-[20%]"
                    style={{ transform: 'rotate(-40deg) scaleX(-1)' }}
                  >
                    <Box className="orn-4 absolute bottom-[15%] left-[10%] w-[110%]">
                      <Box className="orn-5 absolute bottom-1/2 left-[15%] w-[110%]">
                        <Box
                          className="orn-6 absolute bottom-[80%] right-[10%] w-[85%]"
                          style={{ transform: 'rotate(-25deg)' }}
                        >
                          <Box className="orn-7 absolute bottom-1/2 left-0 w-[120%]">
                            <Flower4Image style={{}} />
                          </Box>
                          <Flower3Image />
                        </Box>
                        <BranchImage />
                      </Box>
                      <Flower2Image />
                    </Box>
                    <Flower1Image />
                  </Box>
                </Box>
                <Box className="ornaments-wrapper absolute inset-0" style={{ transform: 'scaleX(-1)' }}>
                  <Box
                    className="orn-3 absolute bottom-[-2.5rem] right-1/2 w-[20%]"
                    style={{ transform: 'rotate(-40deg) scaleX(-1)' }}
                  >
                    <Box className="orn-4 absolute bottom-[15%] left-[10%] w-[110%]">
                      <Box className="orn-5 absolute bottom-1/2 left-[15%] w-[110%]">
                        <Box
                          className="orn-6 absolute bottom-[80%] right-[10%] w-[85%]"
                          style={{ transform: 'rotate(-25deg)' }}
                        >
                          <Box className="orn-7 absolute bottom-1/2 left-0 w-[120%]">
                            <Flower4Image style={{}} />
                          </Box>
                          <Flower3Image />
                        </Box>
                        <BranchImage />
                      </Box>
                      <Flower2Image />
                    </Box>
                    <Flower1Image />
                  </Box>
                </Box>
              </Box>
              <Box className="reminder-content relative mt-[1rem]">
                <Box className="flex text-center justify-center relative min-w-[80%] w-fit gap-[1.5rem] mx-auto">
                  <Text>105</Text>
                  <Text>105</Text>
                  <Text>105</Text>
                </Box>
                <UnstyledButton className="mx-auto mt-[1.5rem] flex items-center relative gap-[0.5rem]">
                  Save the Date
                </UnstyledButton>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box className="couple-wrapper relative">
        <Box className="px-[1.8rem] relative">
          <Box className="flex flex-wrap justify-evenly">
            <Box className="w-full" style={{ flex: '0 0 auto' }}>
              <Box className="relative text-center mb-[3rem]">
                <Box className="ornaments-wrapper absolute inset-0">
                  <Box className="absolute top-0 left-0 w-1/2" style={{ transform: 'translate(-40%, -50%)' }}>
                    <CloudImage />
                  </Box>
                  <Box className="absolute bottom-0 right-0 w-1/2" style={{ transform: 'translate(50%, 50%)' }}>
                    <CloudImage />
                  </Box>
                </Box>
                <Box className="relative w-full text-center mb-[1.25rem]">Bride & Groom</Box>
                <Box className="relative">
                  Kami adalah sepasang manusia yang sedang berbahagia. Kami mengundang Bapak/Ibu/Saudara sekalian untuk
                  menghadiri hari bahagia kami. Ini adalah kami
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="w-full">
          <Box className="flex flex-wrap justify-center">
            <Box className="w-full" style={{ flex: '0 0 auto' }}>
              <Box className="couple relative">
                <Box className="ornaments-wrapper absolute inset-0">
                  <Box
                    className="absolute top-0 left-1/2 w-full"
                    style={{ transform: 'translate(-50%, 0)', opacity: 0.6 }}
                  >
                    <MountainImage />
                  </Box>
                </Box>
                <Box className="relative">
                  <Box className="ornaments-wrapper absolute inset-0">
                    <Box
                      className="orn-1 absolute bottom-[-3rem] left-[2rem] w-[35%]"
                      style={{ transform: 'scaleX(-1) rotate(30deg)' }}
                    >
                      <Box className="orn-2 absolute bottom-[68%] left-[-10%] w-[80%]">
                        <Flower1Image />
                      </Box>
                      <BranchImage />
                    </Box>
                    <Box
                      className="orn-3 absolute bottom-[-3rem] right-[2rem] w-[35%]"
                      style={{ transform: 'rotate(30deg)' }}
                    >
                      <Box
                        className="orn-4 absolute bottom-[70%] left-[-5%] w-[80%]"
                        style={{ transform: 'rotate(-20deg) scaleX(-1)' }}
                      >
                        <Flower4Image />
                      </Box>
                      <BranchImage />
                    </Box>
                  </Box>
                  <Box className="image-wrap man relative w-[75%] mx-auto mb-4">
                    <Box className="pt-[125%] relative w-full h-auto">
                      <Image
                        className="absolute inset-0 w-full h-full overflow-clip align-middle"
                        style={{
                          objectFit: 'cover',
                          maskImage: "url('/images/mask.png')",
                          maskPosition: '50% 50%',
                          maskSize: '100% 100%',
                          maskRepeat: 'no-repeat',
                        }}
                        src={'/images/mempelai-1.webp'}
                        alt="mempelai-1.webp"
                        width={404}
                        height={599}
                      />
                    </Box>
                    <Box className="ornaments-wrapper absolute inset-0">
                      <Box
                        className="absolute top-1/2 left-1/2"
                        style={{ width: 'calc(100% + 1.5rem)', transform: 'translate(-50%, -50%)' }}
                      >
                        <Box className="pt-[125%] relative w-full h-auto">
                          <UnionImage className="absolute top-0 left-0 w-full h-full" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="couple-description relative text-center px-4 pt-4">
                  <Text className="mt-2">Vidi Dwi Saputra</Text>
                  <Box className="mt-2">
                    <Text>Precious Son of</Text>
                    <Box>
                      <Text>Tjipto Gunawan</Text>
                      <Text>&</Text>
                      <Text>Felicia Susanto</Text>
                    </Box>
                  </Box>
                  <Box className="relative w-fit max-w-full px-[0.6rem] py-[0.5rem] rounded-[50px] bg-[#4B5B40] mt-4 mx-auto">
                    <IconBrandInstagram color="white" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="and relative flex justify-center items-center w-full py-[2rem]">&</Box>
            <Box className="w-full" style={{ flex: '0 0 auto' }}>
              <Box className="couple relative">
                <Box className="ornaments-wrapper absolute inset-0">
                  <Box
                    className="absolute top-0 left-1/2 w-full"
                    style={{ transform: 'translate(-50%, 0)', opacity: 0.6 }}
                  >
                    <MountainImage />
                  </Box>
                </Box>
                <Box className="relative">
                  <Box className="ornaments-wrapper absolute inset-0">
                    <Box
                      className="orn-1 absolute bottom-[-3rem] left-[2rem] w-[35%]"
                      style={{ transform: 'scaleX(-1) rotate(30deg)' }}
                    >
                      <Box className="orn-2 absolute bottom-[68%] left-[-10%] w-[80%]">
                        <Flower1Image />
                      </Box>
                      <BranchImage />
                    </Box>
                    <Box
                      className="orn-3 absolute bottom-[-3rem] right-[2rem] w-[35%]"
                      style={{ transform: 'rotate(30deg)' }}
                    >
                      <Box
                        className="orn-4 absolute bottom-[70%] left-[-5%] w-[80%]"
                        style={{ transform: 'rotate(-20deg) scaleX(-1)' }}
                      >
                        <Flower4Image />
                      </Box>
                      <BranchImage />
                    </Box>
                  </Box>
                  <Box className="image-wrap man relative w-[75%] mx-auto mb-4">
                    <Box className="pt-[125%] relative w-full h-auto">
                      <Image
                        className="absolute inset-0 w-full h-full overflow-clip align-middle"
                        style={{
                          objectFit: 'cover',
                          maskImage: "url('/images/mask.png')",
                          maskPosition: '50% 50%',
                          maskSize: '100% 100%',
                          maskRepeat: 'no-repeat',
                        }}
                        src={'/images/mempelai-1.webp'}
                        alt="mempelai-1.webp"
                        width={404}
                        height={599}
                      />
                    </Box>
                    <Box className="ornaments-wrapper absolute inset-0">
                      <Box
                        className="absolute top-1/2 left-1/2"
                        style={{ width: 'calc(100% + 1.5rem)', transform: 'translate(-50%, -50%)' }}
                      >
                        <Box className="pt-[125%] relative w-full h-auto">
                          <UnionImage className="absolute top-0 left-0 w-full h-full" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="couple-description relative text-center px-4 pt-4">
                  <Text className="mt-2">Vidi Dwi Saputra</Text>
                  <Box className="mt-2">
                    <Text>Precious Son of</Text>
                    <Box>
                      <Text>Tjipto Gunawan</Text>
                      <Text>&</Text>
                      <Text>Felicia Susanto</Text>
                    </Box>
                  </Box>
                  <Box className="relative w-fit max-w-full px-[0.6rem] py-[0.5rem] rounded-[50px] bg-[#4B5B40] mt-4 mx-auto">
                    <IconBrandInstagram color="white" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SaveDateSection;
