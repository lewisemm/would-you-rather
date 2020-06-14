import React, { Fragment } from 'react'

export default function Select(props) {
  return (
    <Fragment>
      <label htmlFor="exampleFormControlSelect1">Select a User</label>
      <select
        name="selectedUser"
        className="form-control"
        id="exampleFormControlSelect1"
        onChange={props.handleSelectChange}
      >
        <option value='default'></option>
        {Object.keys(props.users).map(key => {
          return <option key={key} value={key} >{key}</option>
        })}
      </select>
    </Fragment>
  )
}
