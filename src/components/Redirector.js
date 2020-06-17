import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Redirector(props) {
  const { url } = props
  return <Redirect push to={url}/>
}