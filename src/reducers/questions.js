import { RECEIVE_INITIAL_DATA } from '../actions/shared'
import { ANSWER_QUESTION, UNDO_ANSWER_QUESTION } from '../actions/questions'

export function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_INITIAL_DATA:{
      return Object.assign({}, state, action.questions)
    }
    case ANSWER_QUESTION: {
      const { qid, answer } = action.data
      const { authedUser } = action
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    }
    case UNDO_ANSWER_QUESTION: {
      const { qid, answer } = action.data
      const { authedUser } = action
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.filter(userId => {
              return userId !== authedUser
            })
          }
        }
      }
    }
    default:{
      return state
    }
  }
}
