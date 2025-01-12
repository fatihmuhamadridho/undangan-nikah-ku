import React, { useEffect, useRef } from 'react';

const AutoplayAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log('Autoplay failed: ', err);
        });
      }
    };
    window.addEventListener('click', playAudio);
    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div className="hidden">
      <audio ref={audioRef} loop>
        <source
          src="/music/supercell%20-%20Today%20Is%20A%20Beautiful%20Day%20-%2001.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AutoplayAudio;
