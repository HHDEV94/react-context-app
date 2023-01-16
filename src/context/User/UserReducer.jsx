import { GET_PROFILE, GET_USERS } from '../type'

export default (state, action) => {
  const { payload, type } = action

  const DEFAULT_STATE = state

  const reducerObject = {
    GET_USERS: { ...state, users: payload },
    GET_PROFILE: { ...state, userSelected: payload }
  }

  return reducerObject[type] || DEFAULT_STATE
}
