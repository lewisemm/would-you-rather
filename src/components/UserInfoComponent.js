import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class UserInfoComponent extends Component {
  render() {
    const { height, width, authedUser } = this.props
    if (this.props.loading && this.props.loading.default === 0) {
      const { name, avatarURL } = this.props.users[authedUser]

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
    loading: state.loadingBar,
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(UserInfoComponent)
