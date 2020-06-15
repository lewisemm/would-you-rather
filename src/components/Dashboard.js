import React, { Fragment } from 'react'
import TopMenu from './TopMenu'

export default function Home(props) {
  return (
    <Fragment>
      <TopMenu/>
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          And Now This...
        </div>
      </div>
    </Fragment>
  )
}