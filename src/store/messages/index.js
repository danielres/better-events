import { types } from './actions'

const initialState = {
  error: null,
  items: [],
}

export default (state = initialState, { error, payload, type }) => {
  switch (type) {
    case types.POST_MESSAGE_SUCCESS:
      return { items: [...state.items, payload] }
    case types.POST_MESSAGE_FAILURE:
      return { ...state, error }
    default:
      return state
  }
}
