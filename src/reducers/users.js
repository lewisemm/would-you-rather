import { RECEIVE_USERS } from '../actions/users'

export function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users)
    default:
      return state
  }
}
