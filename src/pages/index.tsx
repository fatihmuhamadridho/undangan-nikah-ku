import ApologySection from '@/components/ApologySection';
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

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#e5f6f3';
  }, []);

  return (
    <React.Fragment>
      {!open && (
        <Box>
          <SplashScreen />
          <OpenInvitationSection handleOpen={handleOpen} />
        </Box>
      )}
      {open && (
        <Box>
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
        </Box>
      )}
    </React.Fragment>
  );
};

export default HomePage;
