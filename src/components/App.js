import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginComponent from './LoginComponent'
import Logout from './Logout'
import { handleReceiveUsers } from '../actions/users'
import '../css/App.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleReceiveUsers())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/">
              <Logout/>
            </Route>
            <Route path="/login">
              <LoginComponent/>
            </Route>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App);
