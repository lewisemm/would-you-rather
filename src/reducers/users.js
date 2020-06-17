import { RECEIVE_INITIAL_DATA } from '../actions/shared'
import { ANSWER_QUESTION, UNDO_ANSWER_QUESTION } from '../actions/questions'

export function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_INITIAL_DATA: {
      return Object.assign({}, state, action.users)
    }
    case ANSWER_QUESTION: {
      const { qid, answer } = action.data
      let { authedUser } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    }
    case UNDO_ANSWER_QUESTION: {
      const { qid } = action.data
      let { authedUser } = action

      let undoneAnswers = Object.assign({}, state[authedUser].answers)
      delete undoneAnswers[qid]
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: undoneAnswers
        }
      }
    }
    default:{
      return state
    }
  }
}
