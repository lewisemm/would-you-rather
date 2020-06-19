import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TopMenu from './TopMenu'
import { handleAddQuestion } from '../actions/questions'
import Redirector from './Redirector'

class AddPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    pollCreated: false
  }

  handleChangeOptionOne = (event) => {
    event.preventDefault()
    this.setState({
      optionOne: event.target.value
    })
  }

  handleChangeOptionTwo = (event) => {
    event.preventDefault()
    this.setState({
      optionTwo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { dispatch } = this.props
    const question = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo
    }

    dispatch(handleAddQuestion(question))
    this.setState({
      pollCreated: true,
      optionOneText: '',
      optionTwoText: ''
    })
  }

  render() {
    if (this.state.pollCreated) {
      return <Redirector url='/'/>
    }
    return (
      <Fragment>
        <TopMenu/>
        <div className="row justify-content-center">
          <div className="col-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Would you rather...</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Option One"
                  value={this.state.optionOne}
                  onChange={this.handleChangeOptionOne}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Or</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Option Two"
                  value={this.state.optionTwo}
                  onChange={this.handleChangeOptionTwo}
                />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">Create Poll</button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     authedUser: state.authedUser
//   }
// }

export default connect()(AddPoll)
