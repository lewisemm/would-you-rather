import React, { Component } from 'react'

export default class UnansweredPollDetails extends Component {
  render() {
    const {
      optionOne,
      optionTwo
    } = this.props
    return (
      <div>
        <div className="form-row">
          <div className="col">
            <h5 className="text-center">Would you rather...</h5>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <p className="text-primary">{optionOne.text}</p>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <h5 className="text-center">Or</h5>
            </div>
        </div>
        <div className="form-row">
          <div className="col">
            <p className="text-primary">{optionTwo.text}</p>
          </div>
        </div>
      </div>
    )
  }
}
