import { showLoading, hideLoading } from 'react-redux-loading-bar'
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
    dispatch(showLoading())
    Promise.all(
      [_getUsers()]
    ).then(users => {
      dispatch(receiveUsers(users[0]))
      dispatch(hideLoading())
    })
  }
}
