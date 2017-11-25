import messagesReducer from './index'
import { types } from './actions'

describe(`on ${types.POST_MESSAGE_SUCCESS}`, () => {
  it('Appnd messages to state, resets error if any', () => {
    const initialState = {
      error: 'Oopsie',
      items: [{ body: 'Hi1' }],
    }

    const action = {
      type: types.POST_MESSAGE_SUCCESS,
      payload: { body: 'Hi2' },
    }

    const expected = {
      items: [{ body: 'Hi1' }, { body: 'Hi2' }],
    }

    expect(messagesReducer(initialState, action)).toEqual(expected)
  })
})

describe(`on ${types.POST_MESSAGE_FAILURE}`, () => {
  it('Keeps previous state, sets error', () => {
    const initialState = { items: [{ body: 'Hi' }] }

    const action = {
      error: 'Error message',
      type: types.POST_MESSAGE_FAILURE,
    }

    const expected = {
      error: 'Error message',
      items: [{ body: 'Hi' }],
    }

    expect(messagesReducer(initialState, action)).toEqual(expected)
  })
})
