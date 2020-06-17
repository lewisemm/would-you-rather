import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function AuthenticatedRoute({ children, ...rest }) {
  const { authedUser } = rest
  return (
    <Route
    {...rest}
    render={() => {
        return authedUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(AuthenticatedRoute)
