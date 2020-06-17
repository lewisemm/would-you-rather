import { _saveQuestionAnswer } from '../data/_DATA'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const UNDO_ANSWER_QUESTION = 'UNDO_ANSWER_QUESTION'

function answerQuestion(data, authedUser) {
  return {
    type: ANSWER_QUESTION,
    data,
    authedUser
  }
}

function undoAnswerQuestion(data, authedUser) {
  return {
    type: UNDO_ANSWER_QUESTION,
    data,
    authedUser
  }
}

export default function handleAnswerQuestion(data) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const { qid, answer } = data
    dispatch(answerQuestion(data, authedUser))
    _saveQuestionAnswer({ authedUser, answer, qid })
      .catch(() => {
        dispatch(undoAnswerQuestion(data, authedUser))
        alert('Something went wrong while trying to save your response. Please try again.')
      })
  }
}
