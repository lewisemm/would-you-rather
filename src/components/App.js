import React, { Fragment, Component } from 'react';
import '../css/App.css'
import LoginComponent from './LoginComponent'
import { handleReceiveUsers } from '../actions/users'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleReceiveUsers())
  }

  render() {
    return (
      <Fragment>
        <LoginComponent/>
      </Fragment>
    )
  }
}

export default connect()(App);
