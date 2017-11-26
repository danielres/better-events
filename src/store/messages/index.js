// @flow
import type { action, Message } from '../../types'

type state = { error: String | null, items: Array<Message> }

const initialState: state = {
  error: null,
  items: [],
}

export default (state: state = initialState, action: action) => {
  switch (action.type) {
    case 'POST_MESSAGE_SUCCESS':
      return { items: [...state.items, action.payload] }
    case 'POST_MESSAGE_FAILURE':
      return { ...state, error: action.error }
    default:
      return state
  }
}
