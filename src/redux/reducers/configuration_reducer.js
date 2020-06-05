import {SET_VOICE_INDEX, SET_VOICE_PITCH, SET_VOICE_RATE} from '../action_types';

const initialState = {
  rate: 1,
  pitch: 1,
  voice: null,
};

export default function(state = initialState, action) {
  const generateVoiceState = (configKey) => {
    const partialState = {};
    partialState[configKey] = action.value;
    return {
      ...state,
      ...partialState,
    };
  };

  switch (action.type) {
    case SET_VOICE_RATE:
      return generateVoiceState('rate');
    case SET_VOICE_PITCH:
      return generateVoiceState('pitch');
    case SET_VOICE_INDEX:
      return generateVoiceState('voice_index');
    default:
      return state;
  }
}
