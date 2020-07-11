import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg';

class AvatarComponent extends Component {
  isLoggedIn = () => {
    const { authedUser } = this.props
    if (authedUser) {
      return this.props.users[authedUser]
    }
    return {
      name: 'Not Logged In',
      avatarURL: logo
    }
  }
  render() {
    const { height, width, loading } = this.props
    if (loading && loading.default === 0) {
      const { name, avatarURL } = this.isLoggedIn()

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
        case 50:
          fontSize = 10
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
            <p style={{ fontSize, fontWeight: 'bold' }}>{name}</p>
          </div>
        </Fragment>
      )
    }

    return (
      <div
        className="text-center"
        style={{ width, height: height * 1.3 }}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    users: state.users,
    loading: state.loadingBar
  }
}

export default connect(mapStateToProps)(AvatarComponent)
