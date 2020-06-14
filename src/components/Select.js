import React, { Fragment } from 'react'

export default function Select(props) {
  return (
    <Fragment>
      <label htmlFor="exampleFormControlSelect1">Select a User</label>
      <select className="form-control" id="exampleFormControlSelect1">
        {Object.keys(props.users).map(key => {
          return <option key={key} >{key}</option>
        })}
      </select>
    </Fragment>
  )
}
