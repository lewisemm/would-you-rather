import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { _getUsers, _getQuestions } from '../data/_DATA'

export const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA'

function receiveInitialData(users, questions) {
  return {
    type: RECEIVE_INITIAL_DATA,
    users,
    questions
  }
}

export function handleReceiveInitialData() {
  return dispatch => {
    dispatch(showLoading())
    Promise.all(
      [ _getUsers(), _getQuestions() ]
    ).then(([users, questions]) => {
      dispatch(receiveInitialData(users, questions))
      dispatch(hideLoading())
    })
  }
}