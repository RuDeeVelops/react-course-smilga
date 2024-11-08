import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions'
import { data } from '../../../data'

// REDUCER function - if the action is triggered return a new state, otherwise throw error
const reducer = (state, action, id) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data }
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => person.id !== action.payload.id)
    return { ...state, people: newPeople }
  }
  // throw error is the action type is not handled
  throw new Error(`No matching "${action.type}" - action type`)
}

export default reducer
