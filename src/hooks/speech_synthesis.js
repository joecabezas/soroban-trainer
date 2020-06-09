import {useState, useRef, useEffect} from 'react';

const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const synth = useRef();

  const updateVoices = () => {
    setVoices(synth.current.getVoices());
  };

  useEffect(() => {
    if (typeof window !== 'object' || !window.speechSynthesis) return;
    synth.current = window.speechSynthesis;
    synth.current.onvoiceschanged = updateVoices;
    updateVoices();

    return () => {
      synth.current.onvoiceschanged = null;
    };
  }, []);

  return ([
    voices,
  ]);
};

export {useSpeechSynthesis};
