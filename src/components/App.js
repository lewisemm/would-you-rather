import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Dashboard'
import LoginComponent from './LoginComponent'
import { handleReceiveInitialData } from '../actions/shared'
import '../css/App.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleReceiveInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
          <Route exact path="/">
            <Dashboard/>
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
