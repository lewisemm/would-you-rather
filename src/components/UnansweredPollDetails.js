import React, { Component } from 'react'
import { connect } from 'react-redux'
import handleAnswerQuestion from '../actions/questions'

class UnansweredPollDetails extends Component {
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
    const { optionOne, optionTwo } = this.props
    return (
      <div>
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
      </div>
    )
  }
}

export default connect()(UnansweredPollDetails)

