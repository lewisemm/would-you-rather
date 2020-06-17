import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AnsweredPollDetails from './AnsweredPollDetails'
import handleAnswerQuestion from '../actions/questions'

class ReadWritePollDetails extends Component {
  handleOptionOne = (event) => {
    event.preventDefault()
    const { id, dispatch } = this.props
    const data = {
      answer: 'optionOne',
      qid: id
    }
    dispatch(handleAnswerQuestion(data))
  }

  handleOptionTwo = (event) => {
    event.preventDefault()
    const { id, dispatch } = this.props
    const data = {
      answer: 'optionTwo',
      qid: id
    }
    dispatch(handleAnswerQuestion(data))
  }

  render() {
    const { optionOne, optionTwo, authedUser } = this.props
    const votes = optionOne.votes.length + optionTwo.votes.length
    const userAnswered = optionOne.votes
      .concat(optionTwo.votes)
      .includes(authedUser)
    if (votes > 0 && userAnswered) {
      return (
        <AnsweredPollDetails
          optionOne={optionOne}
          optionTwo={optionTwo}
          authedUser={authedUser}
        />
      )
    }
    return (
      <Fragment>
        <div className="form-row">
          <div className="col">
            <h5>Would you rather...</h5>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handleOptionOne}
            >
              {optionOne.text}
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <h5>Or</h5>
            </div>
        </div>
        <div className="form-row">
          <div className="col">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handleOptionTwo}
            >
              {optionTwo.text}
            </button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default connect()(ReadWritePollDetails)
