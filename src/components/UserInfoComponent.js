import React, { Component, Fragment } from 'react'
import LoadingBar from 'react-redux-loading-bar'
import { connect } from 'react-redux'

class UserInfoComponent extends Component {
  render() {
    if (this.props.loading && this.props.loading.default === 0) {
      const authedUser = 'sarahedo'
      const { name, avatarURL } = this.props.users[authedUser]
      const { height, width } = this.props

      let fontSize

      switch(width) {
        case 160:
          fontSize = 20
          break;
        case 100:
          fontSize = 15
          break;
        case 60:
          fontSize = 12
          break;
        default:
          fontSize = 15
          break;
      }

      return (
        <Fragment>
          <div style={{ width }}>
            <img
              src={avatarURL}
              alt={`Avatar of user ${name}`}
              style={{
                height: `${height}px`,
                width: `${width}px`,
                borderRadius: '50%'
              }}
            />
          </div>
          <div style={{ width }} className='text-center'>
            <p style={{ fontSize }}>{name}</p>
          </div>
        </Fragment>
      )
    }
    return <LoadingBar/>
  }
}

const mapStateToProps = function(state) {
  return {
    users: state.users,
    loading: state.loadingBar
  }
}

export default connect(mapStateToProps)(UserInfoComponent)
