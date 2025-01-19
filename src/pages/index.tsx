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
// import GallerySection from '@/components/GallerySection';

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {}, []);

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
          {/* <DressCodeSection /> */}
          {/* <TimeSection /> */}
          {/* <RSVPSection /> */}
          <WeddingWishesSection />
          {/* <LiveCommentSection /> */}
          {/* <GiftSection /> */}
          {/* <ApologySection /> */}
          {/* <ThankYouSection /> */}
        </ScrollArea>
        <FooterSection />
      </motion.div>
    </React.Fragment>
  );
};

export default HomePage;
