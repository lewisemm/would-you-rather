import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/authedUser'
import { connect } from 'react-redux'
import '../css/common.css'

class Logout extends Component {
  handleClick = (event) => {
    const { dispatch } = this.props
    dispatch(logout())
  }

  render() {
    return (
      <ul className="nav center-justified">
        <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={this.handleClick}>
            Logout
          </Link>
        </li>
      </ul>
    )
  }
}

export default connect()(Logout)
