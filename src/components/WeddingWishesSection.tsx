import { Box, Text, Textarea, TextInput, UnstyledButton } from '@mantine/core';
import React, { startTransition, useEffect, useOptimistic, useState } from 'react';
import Flower1Image from './Images/Flower1Image';
import Flower3Image from './Images/Flower3Image';
import PalmImage from './Images/PalmImage';
import PineImage from './Images/PineImage';
import BgImage from './Images/BgImage';
import { Form, Formik } from 'formik';
import moment from 'moment';

interface DataListItemProps {
  username?: string;
  message?: string;
  createdAt?: string;
  updatedAt?: string;
  sending?: boolean;
}

interface WeddingWishesSectionProps {
  dataList?: DataListItemProps[];
  OnSubmit?: (values: {
    username: string;
    message: string;
    createdAt: string;
    updatedAt: string;
    sending: boolean;
  }) => Promise<void>;
}

const WeddingWishesSection = (props: WeddingWishesSectionProps) => {
  const { dataList = [], OnSubmit = () => {} } = props;
  const [currentTime, setCurrentTime] = useState(moment());
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<DataListItemProps[], DataListItemProps>(
    dataList,
    (state, newMessage) => [newMessage, ...state],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleOptimisticSubmit = async (values: {
    username: string;
    message: string;
    createdAt: string;
    updatedAt: string;
    sending: boolean;
  }) => {
    if (values.username !== '' && values.message !== '') {
      startTransition(async () => {
        try {
          addOptimisticMessage(values);
          await OnSubmit(values);
        } catch (error) {
          console.error('Failed to send message:', error);
        }
      });
    }
    return;
  };

  return (
    <Box className="relative overflow-hidden">
      <Box className="wishes-wrapper-form relative pt-[3rem]">
        <Box className="ornaments-wrapper absolute inset-0">
          <Box className="orn-1 absolute top-0 left-0 w-[30%]" style={{ transform: 'translate(-50%, 0px)' }}>
            <Flower1Image />
          </Box>
          <Box
            className="orn-2 absolute top-[1rem] right-0 w-[25%]"
            style={{ transform: 'translate(50%, 0) rotate(-30deg) scaleX(-1)' }}
          >
            <Flower3Image />
          </Box>
          <Box className="orn-3 absolute bottom-0 left-0 w-[30%]" style={{ transform: 'translate(-60%, 10%)' }}>
            <PalmImage />
          </Box>
          <Box className="orn-4 absolute bottom-0 right-0 w-[30%]" style={{ transform: 'translate(60%, 10%)' }}>
            <PalmImage />
          </Box>
          <Box
            className="orn-5 absolute top-0 left-1/2 w-[90%]"
            style={{ transform: 'translate(-50%, 0)', opacity: 0.2 }}
          >
            <PineImage />
          </Box>
        </Box>
        <Box className="container relative px-[28px] mx-auto">
          <Box className="flex flex-wrap justify-center">
            <Box className="z-[3] relative w-full" style={{ flex: '0 0 auto' }}>
              <Box
                className="border-none bg-transparent relative flex flex-col min-w-0"
                style={{
                  wordWrap: 'break-word',
                  backgroundClip: 'border-box',
                  borderRadius: '0.25rem',
                }}
              >
                <Box className="px-[2rem] pb-[2rem]" style={{ flex: '1 1 auto' }}>
                  <Box className="title-section relative w-full text-center">
                    <Text className="font-brillion" fz={58}>
                      Wedding Wishes
                    </Text>
                  </Box>
                  <Box className="widget-wrapper">
                    <Formik
                      initialValues={{ username: '', message: '' }}
                      onSubmit={(values, { resetForm }) => {
                        handleOptimisticSubmit({
                          username: values.username,
                          message: values.message,
                          createdAt: new Date().toISOString(),
                          updatedAt: new Date().toISOString(),
                          sending: true,
                        });
                        resetForm();
                      }}
                    >
                      {({ handleSubmit, handleChange, values }) => (
                        <Form onSubmit={handleSubmit}>
                          <TextInput
                            className="!mb-4"
                            label="Name"
                            onChange={handleChange}
                            name="username"
                            value={values.username}
                          />
                          <Textarea
                            className="!mb-4"
                            label="Write your wishes"
                            onChange={handleChange}
                            maxLength={300}
                            name="message"
                            value={values.message}
                          />
                          <UnstyledButton
                            className="!bg-[#4B5B40] !py-[0.65rem] !px-[2rem] !text-white rounded-[50px] mx-auto w-full !font-[400] !text-center align-middle !text-[1rem]"
                            type="submit"
                          >
                            Send
                          </UnstyledButton>
                        </Form>
                      )}
                    </Formik>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="wishes-preview relative bg-[#9CB29E]">
        <Box className="ornaments-wrapper absolute inset-0">
          <Box className="absolute bottom-0 left-1/2 w-full h-full" style={{ transform: 'translate(-50%, 0)' }}>
            <Box className="h-full">
              <BgImage
                className="w-full h-full object-cover align-middle"
                style={{ overflowClipMargin: 'content-box', overflow: 'clip' }}
              />
            </Box>
          </Box>
        </Box>
        {optimisticMessages?.length > 0 && (
          <Box className="container px-[1.8rem] w-full mx-auto">
            <Box className="flex flex-wrap justify-center">
              <Box className="mt-[1rem] w-full" style={{ flex: '0 0 auto' }}>
                <Box
                  className="relative border-none bg-transparent flex flex-col min-w-0"
                  style={{
                    wordWrap: 'break-word',
                    backgroundClip: 'border-box',
                    borderRadius: '0.25rem',
                  }}
                >
                  <Box className="overflow-hidden py-[2rem]" style={{ flex: '1 1 auto' }}>
                    <Box className="block">
                      <Box className="text-left max-h-[32rem] overflow-auto pr-[1rem] text-black">
                        {optimisticMessages?.map((item, index) => (
                          <Box
                            key={index}
                            className="mb-[1.5rem] grid"
                            style={{ gridTemplateColumns: 'auto 1fr', gap: '1rem' }}
                          >
                            <Box className="wish-badge bg-white w-[35px] aspect-square flex justify-center items-center rounded-[50px] font-[500]">
                              {item?.username?.slice(0, 1).toUpperCase()}
                            </Box>
                            <Box
                              className="wish-description p-[1rem] rounded-[5px] relative"
                              style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            >
                              <Text fz={'1.17rem'} fw={700}>
                                {item?.username}
                              </Text>
                              <Text>{item?.message}</Text>
                              <Box className="flex items-center gap-2">
                                <Text fz={12} c={'#6c757d'}>
                                  {moment(item?.createdAt).from(currentTime)} at{' '}
                                  {moment(item?.createdAt).format('HH:mm')}
                                </Text>
                                {item?.sending && (
                                  <Text fz={12} c={'#6c757d'}>
                                    Sending...
                                  </Text>
                                )}
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WeddingWishesSection;
