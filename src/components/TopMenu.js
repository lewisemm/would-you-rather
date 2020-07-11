import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import NavComponent from './NavComponent'
import AvatarComponent from './AvatarComponent'

function TopMenu(props) {
  const { authedUser } = props
  return (
    <div className="row align-items-center">
      <div className="col-4">
        <NavComponent/>
      </div>
      <div className="col-7">
        <div style={{ paddingTop: '20px', float: 'right' }}>
          <AvatarComponent height={50} width={50} authedUser={authedUser}/>
        </div>
      </div>
      <div className="col-1">
        <Logout/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(TopMenu)
