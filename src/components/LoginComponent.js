import React, { Component, Fragment } from 'react'
import logo from '../logo.svg';
import '../css/Login.css'
import Select from './Select'
import { connect } from 'react-redux'

class LoginComponent extends Component {
  render() {
    const { users } = this.props

    return (
      <Fragment>
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
            <form>
              <div className="form-row">
                <div className="form-group col">
                  <Select users={users}/>
                </div>
              </div>
              <div className="form-row justify-content-center">
                <div className="form-group col-6 text-center">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default connect(state => ({ users: state.users }))(LoginComponent)
