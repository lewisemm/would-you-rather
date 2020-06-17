import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PollListItem from './PollListItem'

function PollList(props) {
  const { answeredQuestions, unansweredQuestions, authedUser } = props
  
  return (
    <Fragment>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Unanswered Questions</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Answered Questions</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          { Object.keys(unansweredQuestions).map(qid => {
            return <PollListItem key={qid} poll={unansweredQuestions[qid]}/>
          })}
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          { Object.keys(answeredQuestions).map(qid => {
            return <PollListItem key={qid} poll={answeredQuestions[qid]} authedUser={authedUser}/>
          })}
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  const { questions, users, authedUser } = state

  let answeredIds = Object.assign({}, users[authedUser].answers)

  const answeredQuestions = {}
  const unansweredQuestions = {}
  Object.keys(questions).map(qid => {
    if (qid in answeredIds) {
      answeredQuestions[qid] = questions[qid]
    } else {
      unansweredQuestions[qid] = questions[qid]
    }
    return null
  })

  return {
    answeredQuestions,
    unansweredQuestions,
    authedUser
  }
}

export default connect(mapStateToProps)(PollList)
