import { SET_VOICE_RATE } from './action_types'
import { SET_VOICE_PITCH } from './action_types'
import { SET_VOICE } from './action_types'

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
