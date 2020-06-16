import React from 'react'

export default function AnsweredPollDetails(props) {
  const { optionOne, optionTwo } = props
  const votes = optionOne.votes.length + optionTwo.votes.length
  const percent1 = Math.round(optionOne.votes.length / votes * 100)
  const percent2 = 100 - percent1
  return (
    <div>
      <h5>Would you rather...</h5>
      <div className="alert alert-primary" role="alert">
        <p>{optionOne.text}</p>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: `${percent1}%`}} aria-valuenow={percent1} aria-valuemin="0" aria-valuemax="100">{percent1}%</div>
        </div>
        <span>{optionOne.votes.length} out of {votes} votes.</span>
      </div>
      <h5>Or</h5>
      <div className="alert alert-primary" role="alert">
        <p>{optionTwo.text}</p>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: `${percent2}%`}} aria-valuenow={percent2} aria-valuemin="0" aria-valuemax="100">{percent2}%</div>
        </div>
        <span>{optionTwo.votes.length} out of {votes} votes.</span>
      </div>
    </div>
  )
}