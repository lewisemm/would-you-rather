import React, { Component } from 'react'
import UserInfoComponent from './UserInfoComponent'
import AnsweredPollDetails from './AnsweredPollDetails'
import UnansweredPollDetails from './UnansweredPollDetails'

class Poll extends Component {
  render() {
    const { author, optionOne, optionTwo, id } = this.props.poll
    const votes = optionOne.votes.length + optionTwo.votes.length
    return (
        <div className="row align-items-center" style={{ paddingTop: '20px', borderBottom: '1px solid #007bff'}}>
          <div className="col-4">
            <UserInfoComponent authedUser={author} height={160} width={160}/>
          </div>
          <div className="col-8">
            { votes > 0
              ? (
                <AnsweredPollDetails
                  optionOne={optionOne}
                  optionTwo={optionTwo}
                />)
              : (
                <UnansweredPollDetails
                  optionOne={optionOne}
                  optionTwo={optionTwo}
                  id={id}
                />
              )}
            
          </div>
        </div>

    )
  }
}

export default Poll
