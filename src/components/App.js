import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Dashboard'
import LoginComponent from './LoginComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginRoute from './LoginRoute'
import PollView from './PollView'
import AddPoll from './AddPoll'
import NotFound404 from './NotFound404'
import LeaderboardList from './LeaderboardList'
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
            <AuthenticatedRoute exact path="/">
              <Dashboard/>
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/add">
              <AddPoll/>
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/leaderboard">
              <LeaderboardList/>
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/questions/:qid">
              <PollView/>
            </AuthenticatedRoute>
            <LoginRoute path="/login">
              <LoginComponent/>
            </LoginRoute>
            <Route>
              <NotFound404/>
            </Route>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App);
