import {useRef} from 'react';
import {useSelector} from 'react-redux';

const useSpeechSynthesisUtterance = (props) => {
  const onUtteranceQueueChange = props && props.onUtteranceQueueChange;
  const pendingUtterances = useRef(0);
  const config = useSelector((state) => state.config);
  const synth = window.speechSynthesis;

  const speak = (text, cancelPrevious=true) => {
    if (cancelPrevious) {
      cancel();
    }
    speakUsing(
        text,
        synth.getVoices()[config.voice_index],
        config.pitch,
        config.rate,
    );
  };

  const utterancesQueueChangedBy = (delta) => {
    pendingUtterances.current = Math.max(
        pendingUtterances.current + delta,
        0,
    );
    onUtteranceQueueChange(pendingUtterances.current);
  };

  const utterancesQueueReset = () => {
    pendingUtterances.current = 0;
  };

  const speakUsing = ( text, voice, pitch = 1, rate = 1) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.pitch = pitch;
    utterance.rate = rate;
    utterance.onend = () => {utterancesQueueChangedBy(-1)};
    synth.speak(utterance);
    utterancesQueueChangedBy(1);
  };

  const cancel = () => {
    synth.cancel();
    utterancesQueueReset();
  };

  return ([
    speak,
    cancel,
  ]);
};

export {useSpeechSynthesisUtterance};
