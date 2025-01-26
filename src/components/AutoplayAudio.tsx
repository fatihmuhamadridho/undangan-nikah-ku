import { Box, UnstyledButton } from '@mantine/core';
import { IconMusic, IconPlayerPauseFilled } from '@tabler/icons-react';
import React, { useEffect, useRef } from 'react';

interface AutoplayAudioProps {
  isPlaying: boolean;
  handleToggleAudio: (event: boolean) => void;
}

const AutoplayAudio = (props: AutoplayAudioProps) => {
  const { isPlaying = false, handleToggleAudio } = props;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
        handleToggleAudio(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handleToggleAudio]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log('Play failed: ', err);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        handleToggleAudio(false);
      } else {
        audioRef.current.play().catch((err) => {
          console.log('Play failed: ', err);
        });
        handleToggleAudio(true);
      }
    }
  };

  return (
    <Box className="bottom-0 right-0 z-[60] p-0 m-[1.5rem] fixed flex">
      <audio ref={audioRef} loop>
        <source
          src="/music/Siblings Singing 'Carpenters - Close to you'ㅣ친남매가 부르는 'Carpenters - Close to you'.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
      <UnstyledButton
        className="!py-[6px] !px-[12px] rounded-[50%] h-[2.5em] w-[2.5em] text-center relative flex flex-col items-center justify-center font-[400] lh-[1.5] align-middle"
        style={{
          background: 'radial-gradient(rgba(255, 0, 128, 0.8) 60%, rgb(255, 255, 255) 62%)',
          boxShadow: '0px 0px 25px 3px rgba(255, 0, 128, 0.8)',
          // animation: 'pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1)',
        }}
        onClick={toggleAudio}
      >
        {isPlaying ? (
          <IconPlayerPauseFilled width={16} height={24} color="white" />
        ) : (
          <IconMusic width={16} height={24} color="white" />
        )}
      </UnstyledButton>
    </Box>
  );
};

export default AutoplayAudio;
