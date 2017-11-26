// @flow
import type { Action, Message } from '../../types'

type State = { error: String | null, items: Array<Message> }

const initialState: State = {
  error: null,
  items: [],
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'POST_MESSAGE_SUCCESS':
      return { items: [...state.items, action.payload] }
    case 'POST_MESSAGE_FAILURE':
      return { ...state, error: action.error }
    default:
      return state
  }
}
