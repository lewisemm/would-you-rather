import React from 'react'
import { Route } from 'react-router-dom'

export default function LoginRoute({ children, ...rest }) {
  const { location } = rest
  return (
    <Route
      {...rest}
      render={() => {
        return {
          ...children,
          props: {
            ...children.props,
            location
          }

        }
      }}
    />
  )
}
