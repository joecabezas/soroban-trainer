import {useSelector} from 'react-redux';

const useSpeechSynthesisUtterance = () => {
  const config = useSelector((state) => state.config);
  const synth = window.speechSynthesis;

  const speak = (text) => {
    cancel();
    speakUsing(
        text,
        synth.getVoices()[config.voice_index],
        config.pitch,
        config.rate,
    );
  };

  const speakUsing = ( text, voice, pitch = 1, rate = 1) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.pitch = pitch;
    utterance.rate = rate;
    synth.speak(utterance);
  };

  const cancel = () => {
    synth.cancel();
  };

  return ([
    speak,
    cancel,
  ]);
};

export {useSpeechSynthesisUtterance};
