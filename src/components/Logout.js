import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/authedUser'
import { connect } from 'react-redux'

class Logout extends Component {
  handleClick = (event) => {
    const { dispatch } = this.props
    dispatch(logout())
  }

  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link to="/login" onClick={this.handleClick}>
            Logout
          </Link>
        </li>
      </ul>
    )
  }
}

export default connect()(Logout)
