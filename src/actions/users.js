import { _getUsers } from '../data/_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function handleReceiveUsers() {
  return (dispatch) => {
    Promise.all(
      [_getUsers()]
    ).then(users => {
      dispatch(receiveUsers(users[0]))
    })
  }
}
