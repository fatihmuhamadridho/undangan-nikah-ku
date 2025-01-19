import { Box, Text } from '@mantine/core';
import React from 'react';
import PineImage from './Images/PineImage';
import Flower2Image from './Images/Flower2Image';
import BgImage from './Images/BgImage';
import TendaImage from './Images/TendaImage';
import BranchImage from './Images/BranchImage';
import PalmImage from './Images/PalmImage';
import Flower1Image from './Images/Flower1Image';
import Flower3Image from './Images/Flower3Image';
import Flower4Image from './Images/Flower4Image';
import UnionVenueImage from './Images/UnionVenueImage';

const LocationSection = () => {
  return (
    <Box className="relative overflow-hidden">
      <Box className="venue-section relative bg-[#9CB29E] text-[#ffffff] py-[3rem]">
        <Box className="relative">
          <Box className="ornaments-wrappe">
            <Box
              className="orn-1 absolute top-0 left-0 w-[30%]"
              style={{ transform: 'translate(-65%, -35%)' }}
            >
              <PineImage />
              <Box className="orn-2 absolute top-[25%] right-[-10%] w-[80%]">
                <Flower2Image />
              </Box>
            </Box>
            <Box
              className="orn-3 absolute top-0 right-0 w-[30%]"
              style={{ transform: 'translate(65%, -35%)' }}
            >
              <PineImage />
              <Box
                className="orn-4 absolute top-[25%] left-[10%] w-[80%]"
                style={{ transform: 'rotate(-45deg)' }}
              >
                <Flower2Image />
              </Box>
            </Box>
          </Box>
          <Box className="container px-[1.8rem] relative">
            <Box className="flex flex-wrap justify-center">
              <Box className="relative w-full" style={{ flex: '0 0 auto' }}>
                <Box className="relative text-center px-[1.5rem] mb-[3rem]">
                  <Box className="title-section relative w0full text-center mb-[1.25rem]">
                    <Text fz={38}>Lokasi</Text>
                  </Box>
                  <Box className="position-relative relative">
                    <Text className="!mb-[1rem]">
                      Dengan penuh rasa hormat kami mengharapkan kehadiran Bapak/Ibu/Saudara
                      sekalian pada Acara Pernikahan kami yang akan kami laksanakan pada :
                    </Text>
                    <Text className="!mb-[0.5rem]">Minggu, 5 Mei 2025</Text>
                    <Text className="!mb-[1rem]">
                      Besar harapan kami akan kehadiran Bapak/Ibu/Saudara sekalian tentunya dengan
                      memperhatikan anjuran dari Pemerintah. Untuk itu kami memberlakukan protokol
                      kesehatan sebagaimana instruksi dibawah ini
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="venue-content relative">
            <Box className="px-[1.8rem]">
              <Box className="flex flex-wrap justify-center gap-[3rem]">
                <Box className="relative w-full" style={{ flex: '0 0 auto' }}>
                  <Box
                    className="card bg-[#E5F6F3] text-black border-none text-center rounded-[20px] overflow-hidden relative flex flex-col"
                    style={{ wordWrap: 'break-word', backgroundClip: 'border-box' }}
                  >
                    <Box style={{ flex: '1 1 auto' }}>
                      <Box
                        className="event-name relative w-full p-[1rem] overflow-hidden text-black"
                        style={{ borderRadius: '20px 20px 0 0' }}
                      >
                        <Box className="ornaments-wrapper absolute inset-0">
                          <Box
                            className="elements-wrapper-absolute absolute bottom-0 left-1/2 w-full h-full"
                            style={{ transform: 'translate(-50%, 0)' }}
                          >
                            <Box className="h-full">
                              <BgImage
                                className="w-full h-full object-cover align-middle"
                                style={{ overflowClipMargin: 'content-box', overflow: 'clip' }}
                              />
                            </Box>
                          </Box>
                          <Box
                            className="tenda absolute top-[60%] right-0 w-full"
                            style={{ transform: 'translate(50%, -50%)' }}
                          >
                            <TendaImage
                              className="w-full h-auto align-center"
                              style={{ overflowClipMargin: 'content-box', overflow: 'clip' }}
                            />
                          </Box>
                          <Box
                            className="orn-5 absolute top-0 left-0 w-[45%]"
                            style={{ transform: 'translate(-50%, -20%)' }}
                          >
                            <BranchImage />
                          </Box>
                          <Box
                            className="orn-6 absolute top-0 right-0 w-[45%]"
                            style={{ transform: 'translate(50%, -20%) scaleX(-1)' }}
                          >
                            <BranchImage />
                          </Box>
                          <Box
                            className="orn-7 absolute bottom-[3rem] w-[60%]"
                            style={{ transform: 'translate(-50%, 0)' }}
                          >
                            <PineImage />
                          </Box>
                          <Box
                            className="orn-8 absolute bottom-[3rem] right-0 w-[60%]"
                            style={{ transform: 'translate(50%, 0) scaleX(-1)' }}
                          >
                            <PineImage />
                          </Box>
                        </Box>
                        <Box className="ornaments-wrapper absolute inset-0 z-[3]">
                          <Box
                            className="orn-9 absolute bottom-0 left-0 w-1/2"
                            style={{ transform: 'translate(-35%, 40%)' }}
                          >
                            <PalmImage />
                          </Box>
                          <Box
                            className="orn-10 absolute bottom-0 right-0 w-1/2"
                            style={{ transform: 'translate(40%, 40%)' }}
                          >
                            <PalmImage />
                          </Box>
                          <Box
                            className="orn-11 absolute bottom-0 left-0 w-[40%]"
                            style={{ transform: 'translate(-10%, 50%) rotate(-20deg)' }}
                          >
                            <Flower1Image />
                          </Box>
                          <Box
                            className="orn-12 absolute bottom-0 right-0 w-[35%]"
                            style={{ transform: 'translate(25%, 45%)' }}
                          >
                            <Box
                              className="orn-13 absolute top-[15%] right-[65%] w-[80%]"
                              style={{ transform: 'scaleX(-1)' }}
                            >
                              <Flower3Image />
                            </Box>
                            <Flower4Image />
                          </Box>
                        </Box>
                        <Box className="union relative w-full">
                          <Box className="relative w-full h-auto">
                            <UnionVenueImage
                              className="w-full h-auto max-w-full align-middle"
                              style={{ overflowClipMargin: 'content-box', overflow: 'clip' }}
                            />
                          </Box>
                        </Box>
                        <Box
                          className="event-name-body absolute top-1/2 left-1/2 w-full px-[14%] z-[5]"
                          style={{ transform: 'translate(-50%, -50%)' }}
                        >
                          <Box className="relative">
                            <Text fz={32}>Acara Pernikahan</Text>
                            <Text>Monday,</Text>
                            <Text>May 2025</Text>
                            <Text>08:00 - 10.00</Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="relative w-full" style={{ flex: '0 0 auto' }}>
                  <Box
                    className="card bg-[#E5F6F3] text-black border-none text-center rounded-[20px] overflow-hidden relative flex flex-col"
                    style={{ wordWrap: 'break-word', backgroundClip: 'border-box' }}
                  >
                    <Box style={{ flex: '1 1 auto' }}>
                      <Box
                        className="event-name relative w-full p-[1rem] overflow-hidden text-black"
                        style={{ borderRadius: '20px 20px 0 0' }}
                      >
                        <Box className="ornaments-wrapper absolute inset-0">
                          <Box
                            className="elements-wrapper-absolute absolute bottom-0 left-1/2 w-full h-full"
                            style={{ transform: 'translate(-50%, 0)' }}
                          >
                            <Box className="h-full">
                              <BgImage
                                className="w-full h-full object-cover align-middle"
                                style={{ overflowClipMargin: 'content-box', overflow: 'clip' }}
                              />
                            </Box>
                          </Box>
                          <Box
                            className="tenda absolute top-[60%] right-0 w-full"
                            style={{ transform: 'translate(50%, -50%)' }}
                          >
                            <TendaImage
                              className="w-full h-auto align-center"
                              style={{ overflowClipMargin: 'content-box', overflow: 'clip' }}
                            />
                          </Box>
                          <Box
                            className="orn-5 absolute top-0 left-0 w-[45%]"
                            style={{ transform: 'translate(-50%, -20%)' }}
                          >
                            <BranchImage />
                          </Box>
                          <Box
                            className="orn-6 absolute top-0 right-0 w-[45%]"
                            style={{ transform: 'translate(50%, -20%) scaleX(-1)' }}
                          >
                            <BranchImage />
                          </Box>
                          <Box
                            className="orn-7 absolute bottom-[3rem] w-[60%]"
                            style={{ transform: 'translate(-50%, 0)' }}
                          >
                            <PineImage />
                          </Box>
                          <Box
                            className="orn-8 absolute bottom-[3rem] right-0 w-[60%]"
                            style={{ transform: 'translate(50%, 0) scaleX(-1)' }}
                          >
                            <PineImage />
                          </Box>
                        </Box>
                        <Box className="ornaments-wrapper absolute inset-0 z-[3]">
                          <Box
                            className="orn-9 absolute bottom-0 left-0 w-1/2"
                            style={{ transform: 'translate(-35%, 40%)' }}
                          >
                            <PalmImage />
                          </Box>
                          <Box
                            className="orn-10 absolute bottom-0 right-0 w-1/2"
                            style={{ transform: 'translate(40%, 40%)' }}
                          >
                            <PalmImage />
                          </Box>
                          <Box
                            className="orn-11 absolute bottom-0 left-0 w-[40%]"
                            style={{ transform: 'translate(-10%, 50%) rotate(-20deg)' }}
                          >
                            <Flower1Image />
                          </Box>
                          <Box
                            className="orn-12 absolute bottom-0 right-0 w-[35%]"
                            style={{ transform: 'translate(25%, 45%)' }}
                          >
                            <Box
                              className="orn-13 absolute top-[15%] right-[65%] w-[80%]"
                              style={{ transform: 'scaleX(-1)' }}
                            >
                              <Flower3Image />
                            </Box>
                            <Flower4Image />
                          </Box>
                        </Box>
                        <Box className="union relative w-full">
                          <Box className="relative w-full h-auto">
                            <UnionVenueImage
                              className="w-full h-auto max-w-full align-middle"
                              style={{ overflowClipMargin: 'content-box', overflow: 'clip' }}
                            />
                          </Box>
                        </Box>
                        <Box
                          className="event-name-body absolute top-1/2 left-1/2 w-full px-[14%] z-[5]"
                          style={{ transform: 'translate(-50%, -50%)' }}
                        >
                          <Box className="relative">
                            <Text fz={32}>Acara Pernikahan</Text>
                            <Text>Monday,</Text>
                            <Text>May 2025</Text>
                            <Text>08:00 - 10.00</Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="rsvp-section relative"></Box>
    </Box>
  );
};

export default LocationSection;
