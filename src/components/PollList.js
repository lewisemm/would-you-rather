import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

function PollList(props) {
  const { answeredQuestions, unansweredQuestions } = props
  
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
            return <Poll key={qid} poll={unansweredQuestions[qid]} />
          })}
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="container">

            { Object.keys(answeredQuestions).map(qid => {
              return <Poll key={qid} poll={answeredQuestions[qid]} />
            })}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  const { questions, users } = state
  let answeredIds = {}

  Object.keys(users).map(key => {
    if (users[key].answers) {
      answeredIds = Object.assign(answeredIds, users[key].answers)
    }
    return null
  })

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
    unansweredQuestions
  }
}

export default connect(mapStateToProps)(PollList)
