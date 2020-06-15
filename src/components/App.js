import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginComponent from './LoginComponent'
import Logout from './Logout'
import NavComponent from './NavComponent'
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
            <Fragment>
              <div className="row align-items-center">
                <div className="col-4">
                  <NavComponent/>
                </div>
                <div className="col-7">
                  <div style={{ paddingTop: '20px', float: 'right' }}>
                    <UserInfoComponent height={50} width={50}/>
                  </div>
                </div>
                <div className="col-1">
                  <Logout/>
                </div>
              </div>
            </Fragment>
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
