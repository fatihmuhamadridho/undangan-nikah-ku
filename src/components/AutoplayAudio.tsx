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
          src="/music/Siblings Singing 'Carpenters - Close to you'ㅣ친남매가 부르는 'Carpenters - Close to you'.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AutoplayAudio;
