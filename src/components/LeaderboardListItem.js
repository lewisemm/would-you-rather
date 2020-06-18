import React, { Fragment } from 'react'
import UserInfoComponent from './UserInfoComponent'

export default function LeaderboardListItem(props) {
  const { user } = props
  const { id } = user
  const questionsAsked = user.questions.length
  const questionsAnswered = Object.keys(user.answers).length
  const score = questionsAnswered + questionsAsked
  return (
    <Fragment>
      <div 
        className="row align-items-center justify-content-center"
        style={{
          paddingTop: '20px',
          borderBottom: '1px solid #007bff',
        }}
      >
        <div className="col-2">
          <UserInfoComponent authedUser={id} height={160} width={160}/>
        </div>
        <div className="col-4">
          <div className="alert alert-secondary" role="alert">
            Questions Asked: <strong>{questionsAsked}</strong>
          </div>
          <div className="alert alert-secondary" role="alert">
            Questions Answered: <strong>{questionsAnswered}</strong>
          </div>
          <div className="alert alert-success" role="alert">
            Score: <strong>{score}</strong>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
