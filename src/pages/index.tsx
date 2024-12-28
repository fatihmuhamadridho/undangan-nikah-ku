import ApologySection from '@/components/ApologySection';
import AutoplayAudio from '@/components/AutoplayAudio';
import CoupleSection from '@/components/CoupleSection';
import DressCodeSection from '@/components/DressCodeSection';
import FooterSection from '@/components/FooterSection';
import GallerySection from '@/components/GallerySection';
import GiftSection from '@/components/GiftSection';
import HeaderSection from '@/components/HeaderSection';
import LiveCommentSection from '@/components/LiveCommentSection';
import LocationSection from '@/components/LocationSection';
import OpenInvitationSection from '@/components/OpenInvitationSection';
import OurStorySection from '@/components/OurStorySection';
import RSVPSection from '@/components/RSVPSection';
import SaveDateSection from '@/components/SaveDateSection';
import SplashScreen from '@/components/SplashScreen';
import ThankYouSection from '@/components/ThankYouSection';
import TimeSection from '@/components/TimeSection';
import WeddingWishesSection from '@/components/WeddingWishesSection';
import WelcomeSection from '@/components/WelcomeSection';
import { Box, ScrollArea } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#e5f6f3';
  }, []);

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
        <title>Fatih dan Tirta - Wedding Invitation</title>
      </Head>
      {/* <AutoplayAudio /> */}
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
        animate={open ? { y: '-100%' } : { y: 0 }}
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
          display: open ? 'block' : 'none',
        }}
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1, display: '' } : { opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <Box visibleFrom="md">
          <HeaderSection />
        </Box>
        <ScrollArea left={{ xs: '0%', md: '60%' }} w={{ xs: '100%', md: '40%' }} mih={'200vh'}>
          <WelcomeSection />
          <SaveDateSection />
          <CoupleSection />
          <OurStorySection />
          <GallerySection />
          <LocationSection />
          <DressCodeSection />
          <TimeSection />
          <RSVPSection />
          <WeddingWishesSection />
          <LiveCommentSection />
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
