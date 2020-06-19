import React, { Component, Fragment } from 'react'
import logo from '../logo.svg';
import '../css/Login.css'
import Select from './Select'
import Redirector from './Redirector'
import TopMenu from './TopMenu'
import { connect } from 'react-redux'
import { authedUser } from '../actions/authedUser'


class LoginComponent extends Component {
  state = {
    user: ''
  }

  handleSelectChange = (event) => {
    event.preventDefault()
    this.setState({
      user: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.user && this.state.user.length > 0) {
      this.props.dispatch(authedUser(this.state.user))
    }
  }

  render() {
    const { users, authedUser, location } = this.props
    console.log('this.props... ', this.props)
    if (authedUser && authedUser.length > 0) {
      const url = location.state ? location.state.from : '/'
      return <Redirector url={url}/>
    }

    return (
      <Fragment>
        <TopMenu/>
        <div className="row justify-content-center login-first-row">
          <h3>Would You Rather?</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 logo-parent">
            <img className="logo" src={logo} alt='React Logo'/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col">
                  <Select
                    users={users}
                    handleSelectChange={this.handleSelectChange}
                  />
                </div>
              </div>
              <div className="form-row justify-content-center">
                <div className="form-group col-6 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={this.state.user === ''}
                  >Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    users: state.users,
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(LoginComponent)
