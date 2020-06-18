import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TopMenu from './TopMenu'
import LeaderboardListItem from './LeaderboardListItem'

class LeaderboardList extends Component {
  render() {
    const { users, sortedUsers } = this.props
    return (
      <Fragment>
        <TopMenu/>
          { sortedUsers.map(key => {
            return (
              <LeaderboardListItem
                key={key}
                user={users[key]}
              />
            )
          })}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const sortedUsers = Object.keys(state.users)
    .sort((a, b) => {
      const scoreA = state.users[a].questions.length + Object.keys(state.users[a].answers).length
      const scoreB = state.users[b].questions.length + Object.keys(state.users[b].answers).length
      return scoreB - scoreA
    })
  return {
    users: state.users,
    sortedUsers
  }
}

export default connect(mapStateToProps)(LeaderboardList)