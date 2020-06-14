import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginComponent from './LoginComponent'
import UserInfoComponent from './UserInfoComponent'
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
              <UserInfoComponent height={100} width={100} />
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
