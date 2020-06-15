import { AUTHED_USER, LOGOUT_USER } from '../actions/authedUser'

export default function authedUser(state = null, action) {
  switch(action.type) {
    case AUTHED_USER:
      return action.id
    case LOGOUT_USER:
      return null
    default:
      return state
  }
}
