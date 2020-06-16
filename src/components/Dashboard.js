import React, { Fragment } from 'react'
import TopMenu from './TopMenu'
import PollList from './PollList'

export default function Home(props) {
  return (
    <Fragment>
      <TopMenu/>
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <PollList/>
        </div>
      </div>
    </Fragment>
  )
}