import {Button, List, ListItem, TextField} from '@material-ui/core';
import {connect, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';

import PropTypes from 'prop-types';

import {
  createIndexedOptionsFromArray,
} from './utils/array_utils';
import {
  setVoiceIndex,
  setVoicePitch,
  setVoiceRate
} from './redux/actions';
import { useSpeechSynthesis } from './hooks/speech_synthesis';
import SelectInput from './select_input';
import SliderInput from './slider_input';

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
      </ListItem>
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
    {setVoiceRate, setVoicePitch, setVoiceIndex},
)(ConfigurationForm);
