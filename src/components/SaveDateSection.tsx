import { Box, Flex, Text, UnstyledButton } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import MountainImage from './Images/MountainImage';
import Image from 'next/image';
import UnionImage from './Images/UnionImage';
import BranchImage from './Images/BranchImage';
import Flower4Image from './Images/Flower4Image';
import Flower3Image from './Images/Flower3Image';
import Flower2Image from './Images/Flower2Image';
import Flower1Image from './Images/Flower1Image';
import CloudImage from './Images/CloudImage';
import { IconCalendarHeart } from '@tabler/icons-react';
import moment from 'moment';
import Link from 'next/link';

const calculateTimeLeft = () => {
  const weddingDate = moment('2025-02-09T09:00:00');
  const now = moment();
  const duration = moment.duration(weddingDate.diff(now));
  return {
    days: Math.floor(duration.asDays()),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };
};

const SaveDateSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
                        objectPosition: 'calc(50% - 20px) center',
                      }}
                      src={'/images/gallery3/berdua.webp'}
                      alt="berdua"
                      width={1600}
                      height={1066}
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
                <Box className="countdown flex text-center justify-center relative min-w-[80%] w-fit gap-[1.5rem] mx-auto">
                  <Box className="flex flex-col justify-center items-center relative">
                    <Text className="font-gallery" fz={36}>
                      {timeLeft.days}
                    </Text>
                    <Text fz={14}>Days</Text>
                  </Box>
                  <Box className="flex flex-col justify-center items-center relative">
                    <Text className="font-gallery" fz={36}>
                      {timeLeft.hours}
                    </Text>
                    <Text fz={14}>Hours</Text>
                  </Box>
                  <Box className="flex flex-col justify-center items-center relative">
                    <Text className="font-gallery" fz={36}>
                      {timeLeft.minutes}
                    </Text>
                    <Text fz={14}>Minutes</Text>
                  </Box>
                  <Box className="flex flex-col justify-center items-center relative">
                    <Text className="font-gallery" fz={36}>
                      {timeLeft.seconds}
                    </Text>
                    <Text fz={14}>Seconds</Text>
                  </Box>
                </Box>
                <UnstyledButton
                  className="mx-auto mt-[1.5rem] w-max flex items-center relative gap-[0.5rem] !bg-[#4B5B40] rounded-[200px]"
                  style={{ padding: '0.65rem 2rem', color: 'white' }}
                  component={Link}
                  href={
                    'https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Tirta+%26+Fatih&details=Visit+the+invitation+here%0Ahttps%3A%2F%2Fundangan-nikah-ku.vercel.app%2F&location=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FJalan%2BKh.%2BHasim%2BAsyari%2BNo.7%2C%2BRT.002%252FRW.005%2C%2BSudimara%2BPinang%2C%2BKec.%2BPinang%2C%2BKota%2BTangerang%2C%2BBanten%2B15145%2F%40-6.2246119%2C106.6918511%2C19.55z%2Fdata%3D%214m6%213m5%211s0x2e69fa26e7c9038d%3A0xea43bb7c1205826d%218m2%213d-6.2246901%214d106.6923552%2116s%252Fg%252F11fphw_656%3Fentry%3Dtts%26g_ep%3DEgoyMDI1MDEyMi4wIPu8ASoASAFQAw%253D%253D&dates=20250209T020000Z%2F20250209T150000Z'
                  }
                  target="__blank"
                >
                  <IconCalendarHeart size={20} />
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
                {/* <Box className="relative w-full text-center mb-[1.25rem]">Bride & Groom</Box> */}
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
                        src={'/images/gallery3/pria.webp'}
                        alt="pria.webp"
                        width={1600}
                        height={1066}
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
                  <Text className="mt-2 font-against" fz={20}>
                    Fatih Muhamad Ridho
                  </Text>
                  <Box className="mt-2">
                    <Text className="font-milyuna" fz={16}>
                      Precious Second Child of
                    </Text>
                    <Box>
                      <Text fz={16} fw={500}>
                        Ridwan
                      </Text>
                      <Text fz={16} fw={500}>
                        &
                      </Text>
                      <Text fz={16} fw={500}>
                        Eti Suryanih
                      </Text>
                    </Box>
                  </Box>
                  {/* <Box className="relative w-fit max-w-full px-[0.6rem] py-[0.5rem] rounded-[50px] bg-[#4B5B40] mt-4 mx-auto">
                    <IconBrandInstagram color="white" />
                  </Box> */}
                </Box>
              </Box>
            </Box>
            <Box className="and relative flex justify-center items-center w-full py-[2rem] font-gallery" fz={28}>
              &
            </Box>
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
                        src={'/images/gallery3/wanita.webp'}
                        alt="wanita.webp"
                        width={1066}
                        height={1600}
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
                  <Text className="mt-2 font-against" fz={20}>
                    Tirta Puspitasari
                  </Text>
                  <Box className="mt-2">
                    <Text className="font-milyuna" fz={16}>
                      Precious First Child of
                    </Text>
                    <Box>
                      <Text fz={16} fw={500}>
                        Suryanto
                      </Text>
                      <Text fz={16} fw={500}>
                        &
                      </Text>
                      <Text fz={16} fw={500}>
                        Herlina
                      </Text>
                    </Box>
                  </Box>
                  {/* <Box className="relative w-fit max-w-full px-[0.6rem] py-[0.5rem] rounded-[50px] bg-[#4B5B40] mt-4 mx-auto">
                    <IconBrandInstagram color="white" />
                  </Box> */}
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
