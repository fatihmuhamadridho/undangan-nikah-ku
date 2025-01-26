import { ScrollArea } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import FooterSection from '@/components/FooterSection';
import HeaderSection from '@/components/HeaderSection';
import OpenInvitationSection from '@/components/OpenInvitationSection';
import SplashScreen from '@/components/SplashScreen';
import WelcomeSection from '@/components/WelcomeSection';
import SaveDateSection from '@/components/SaveDateSection';
import OurStorySection from '@/components/OurStorySection';
import LocationSection from '@/components/LocationSection';
import WeddingWishesSection from '@/components/WeddingWishesSection';
import GiftSection from '@/components/GiftSection';
import ApologySection from '@/components/ApologySection';
import ThankYouSection from '@/components/ThankYouSection';
import { createMessageSWR, useGetAllMessageSWR } from '@/@core/infra/clients/swr/useGetAllMessageSWR.client';
import dynamic from 'next/dynamic';

const AutoplayAudio = dynamic(() => import('@/components/AutoplayAudio'), { ssr: true });

interface DataListItemProps {
  username?: string;
  message?: string;
  sending?: boolean;
}

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const { data: messageData } = useGetAllMessageSWR();
  const [optimisticMessages, setOptimisticMessages] = useState<DataListItemProps[]>([]);
  const allMessages = [...optimisticMessages, ...(messageData?.data || [])];

  const handleOpen = () => {
    setOpen(true);
    handleToggleAudio(true);
  };

  const handleToggleAudio = (event: boolean) => {
    setIsPlayingAudio(event!);
  };

  const handleSubmitMessage = async (props: {
    username: string;
    message: string;
    createdAt: string;
    updatedAt: string;
    sending: boolean;
  }) => {
    setOptimisticMessages((prevMessages) => [
      {
        username: props.username,
        message: props.message,
        createdAt: props.createdAt,
        updatedAt: props.updatedAt,
        sending: true,
      },
      ...prevMessages,
    ]);
    try {
      await createMessageSWR({ username: props.username, message: props.message });
      setOptimisticMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.username === props.username && msg.message === props.message ? { ...msg, sending: false } : msg,
        ),
      );
    } catch (error) {
      console.error('Error submitting message:', error);
    }
  };

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <React.Fragment>
      <Head>
        <title>Tirta dan Fatih - Wedding Invitation</title>
      </Head>
      <AutoplayAudio isPlaying={isPlayingAudio} handleToggleAudio={handleToggleAudio} />
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 100,
          overflow: 'hidden',
        }}
        initial={{ y: 0 }}
        animate={open ? { y: '-120%' } : { y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <SplashScreen />
        <OpenInvitationSection handleOpen={handleOpen} />
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: open ? 'flex' : 'none',
          flexDirection: 'column',
        }}
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1, display: '' } : { opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <HeaderSection />
        <ScrollArea ml={'auto'} w={{ xs: '100%', md: '39%' }}>
          <WelcomeSection />
          <SaveDateSection />
          <OurStorySection />
          {/* <GallerySection /> */}
          <LocationSection />
          <WeddingWishesSection dataList={allMessages} OnSubmit={handleSubmitMessage} />
          <GiftSection />
          <ApologySection />
          <ThankYouSection />
        </ScrollArea>
        <FooterSection />
      </motion.div>
    </React.Fragment>
  );
};

export default HomePage;
