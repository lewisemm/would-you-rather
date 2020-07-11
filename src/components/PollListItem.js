import React, { Component } from 'react'
import AvatarComponent from './AvatarComponent'
import UnansweredPollDetails from './UnansweredPollDetails'
import Redirector from './Redirector'


class PollListItem extends Component {
  state = {
    redirect: false
  }
  handleRedirect = (event) => {
    this.setState({
      redirect: true
    })
  }

  render() {
    const { author, optionOne, optionTwo, id } = this.props.poll
    const { authedUser } = this.props
    if (this.state.redirect) {
      const url = `/questions/${id}`
      return <Redirector url={url}/>
    }
    return (
      <div
        className="row align-items-center"
        style={{
          paddingTop: '20px',
          borderBottom: '1px solid #007bff',
          cursor: 'pointer'
        }}
        onClick={this.handleRedirect}
      >
        <div className="col-4">
          <AvatarComponent authedUser={author} height={160} width={160}/>
        </div>
        <div className="col-8">
          { authedUser && authedUser.length > 0
            ? (
              <UnansweredPollDetails
                optionOne={optionOne}
                optionTwo={optionTwo}
              />)
            : (
              <UnansweredPollDetails
                optionOne={optionOne}
                optionTwo={optionTwo}
              />
            )}
        </div>
      </div>

    )
  }
}

export default PollListItem
