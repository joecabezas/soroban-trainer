import {Button, List, ListItem} from '@material-ui/core';
import React, {useState, useEffect, useRef} from 'react';

import {
  createIndexedOptionsFromArray,
} from './utils/array_utils';
import SelectInput from './select_input';

const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const synth = useRef();

  const updateVoices = () => {
    setVoices(synth.current.getVoices());
  };

  const speak = (text, voice, pitch = 1, rate = 1) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.pitch = pitch;
    utterance.rate = rate;
    synth.current.speak(utterance);
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
    speak,
  ]);
};


const ConfigurationForm = () => {
  const [voices, speak] = useSpeechSynthesis();
  const [currentVoice, setCurrentVoice] = useState();

  const onLanguageSelected = (event) => {
    const voice = voices[event.target.value];
    setCurrentVoice(voice);
    speak('chupa la que cuelga', voice);
  };

  const generateSelectInput = () => {
    const inputData = {
      label: 'Voice language',
      options: createIndexedOptionsFromArray(voices.map((voice) => voice.name)),
    };
    return <SelectInput {...inputData} onChange={onLanguageSelected} />;
  };

  return voices.length ?
    <form>
      <List>
        <ListItem>
          {generateSelectInput()}
        </ListItem>
        <ListItem
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Start
          </Button>
        </ListItem>
      </List>
    </form> :
    <React.Fragment>
      Loading...
    </React.Fragment>
  ;
};

export default ConfigurationForm;
