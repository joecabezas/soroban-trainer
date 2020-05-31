import {
  OPEN_DRAWER_SECTION,
  SET_EXERCISE,
  SET_VOICE,
  SET_VOICE_PITCH,
  SET_VOICE_RATE
} from './action_types';

export const setVoiceRate = value => ({
  type: SET_VOICE_RATE,
  value: value
})

export const setVoicePitch = value => ({
  type: SET_VOICE_PITCH,
  value: value
})

export const setVoice = value => ({
  type: SET_VOICE,
  value: value
})

export const openDrawerSection = value => ({
  type: OPEN_DRAWER_SECTION,
  value: value
})

export const startExcercise = value => ({
  type: SET_EXERCISE,
  value: value
})
