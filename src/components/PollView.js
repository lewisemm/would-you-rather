import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import TopMenu from './TopMenu'
import ReadWritePollDetails from './ReadWritePollDetails'
import AvatarComponent from './AvatarComponent'
import NotFound404 from './NotFound404'

function PollView(props) {
  const { qid } = useParams()
  if (!props.questions[qid]) {
    return <NotFound404/>
  }
  const { author, optionOne, optionTwo } = props.questions[qid]
  const { authedUser } = props
  return (
    <Fragment>
      <TopMenu/>
      <div
        className="row align-items-center justify-content-center"
        style={{
          paddingTop: '20px'
        }}
      >
        <div className="col-2">
          <AvatarComponent authedUser={author} height={160} width={160}/>
        </div>
        <div className="col-4">
          <ReadWritePollDetails
            id={qid}
            optionOne={optionOne}
            optionTwo={optionTwo}
            authedUser={authedUser}
          />
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(PollView)
