import {Button, List, ListItem, TextField} from '@material-ui/core';
import {connect, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import React, {useState, useEffect, useRef} from 'react';

import PropTypes from 'prop-types';

import {
  createIndexedOptionsFromArray,
} from './utils/array_utils';
import {setVoice, setVoicePitch, setVoiceRate} from './redux/actions';
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

const ConfigurationForm = ({
  setVoiceRate,
  setVoicePitch,
  setVoice,
}) => {
  const [voices, speak, cancel] = useSpeechSynthesis();
  const [testPhrase, setTestPhrase] = useState('This is a voice Sample');

  const config = useSelector((state) => state.config);

  const classes = useStyles();

  const onRateSelected = (value) => {
    setVoiceRate(value);
  };

  const onPitchSelected = (value) => {
    setVoicePitch(value);
  };

  const onVoiceSelected = (index) => {
    const voice = voices[index];
    setVoice(voice);
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
      options: createIndexedOptionsFromArray(
          voices.map((voice) => `${voice.name} (${voice.lang})`),
      ),
      onChange: onVoiceSelected,
    };
    return <SelectInput {...inputData} />;
  };

  return voices.length ?
    <List>
      <ListItem
        className={classes.listItem}
      >
        <SliderInput
          value={config.rate}
          label="Rate"
          onChangeCommitted={onRateSelected}
        />
      </ListItem>
      <ListItem
        className={classes.listItem}
      >
        <SliderInput
          value={config.pitch}
          label="Pitch"
          onChangeCommitted={onPitchSelected}
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
 zq     </ListItem>
    </List> :
    <React.Fragment>
      Loading...
    </React.Fragment>
  ;
};

ConfigurationForm.propTypes = {
  setVoiceRate: PropTypes.func,
  setVoicePitch: PropTypes.func,
  setVoice: PropTypes.func,
};

export default connect(
    null,
    {setVoiceRate, setVoicePitch, setVoice},
)(ConfigurationForm);
