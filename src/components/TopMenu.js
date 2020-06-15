import React from 'react'
import Logout from './Logout'
import NavComponent from './NavComponent'
import UserInfoComponent from './UserInfoComponent'

export default function TopMenu(props) {
  return (
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
  )
}