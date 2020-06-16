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
    // TODO: Figure out what is going on with authedUser then remove the
    // line below
    const sarah = authedUser ? authedUser : 'sarahedo'
    const { qid, answer } = data
    dispatch(answerQuestion(data, sarah))
    _saveQuestionAnswer({ authedUser: sarah, answer, qid })
      .catch(() => {
        dispatch(undoAnswerQuestion(data, sarah))
        alert('Something went wrong while trying to save your response. Please try again.')
      })
  }
}
