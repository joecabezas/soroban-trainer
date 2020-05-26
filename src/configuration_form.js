import {Button, List, ListItem, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useState, useEffect, useRef} from 'react';

import {
  createIndexedOptionsFromArray,
} from './utils/array_utils';
import SelectInput from './select_input';
import SliderInput from './slider_input';

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

  const cancel = () => {
    synth.current.cancel();
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
    cancel,
  ]);
};

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingBottom: 0,
  },
}));

const ConfigurationForm = () => {
  const [voices, speak, cancel] = useSpeechSynthesis();
  const [currentVoice, setCurrentVoice] = useState();
  const [rate, setRate] = useState();
  const [pitch, setPitch] = useState();
  const [testPhrase, setTestPhrase] = useState('This is a voice Sample');

  const classes = useStyles();

  const onRateSelected = (event, value) => {
    setRate(value);
  };

  const onPitchSelected = (event, value) => {
    setPitch(value);
  };

  const onVoiceSelected = (event) => {
    const voice = voices[event.target.value];
    setCurrentVoice(voice);
  };

  const onTestPhraseChange = (event) => {
    setTestPhrase(event.target.value);
  };

  const onTestVoiceClick = (event) => {
    cancel();
    speak(testPhrase, currentVoice, pitch, rate);
  };

  const generateSelectInput = () => {
    const inputData = {
      label: 'Voice language',
      options: createIndexedOptionsFromArray(voices.map((voice) => voice.name)),
      onChange: onVoiceSelected,
    };
    return <SelectInput {...inputData} />;
  };

  return voices.length ?
    <form>
      <List>
        <ListItem
          className={classes.listItem}
        >
          <SliderInput
            label="Rate"
            onChange={onRateSelected}
          />
        </ListItem>
        <ListItem
          className={classes.listItem}
        >
          <SliderInput
            label="Pitch"
            onChange={onPitchSelected}
          />
        </ListItem>
        <ListItem>
          {generateSelectInput()}
        </ListItem>
        <ListItem>
          <TextField
            label="Voice test phrase"
            variant="outlined"
            defaultValue={testPhrase}
            onChange={onTestPhraseChange}
          />
        </ListItem>
        <ListItem
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onTestVoiceClick}
            fullWidth
          >
            Test Voice
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
