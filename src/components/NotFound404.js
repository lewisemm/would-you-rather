import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound404(props) {
  return (
    <div
      className="row align-items-center justify-content-center"
      style={{
        paddingTop: '120px'
      }}
    >
      <div className="col-8">
        <div className="jumbotron">
          <h1 className="display-4 ">Page Not Found!</h1>
          <p className="lead ">Oops.</p>
          <hr className="my-4"/>
          <p className="">We can't seem to find the page you are looking for.</p>
          <Link
            className="btn btn-primary btn-lg"
            to="/"
            role="button"
            style={{
              float: 'right'
            }}
          >
            Take me Home
          </Link>
        </div>
      </div>
    </div>
  )
}