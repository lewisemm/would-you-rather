import React from 'react'
import { Link } from 'react-router-dom'

export default function NavComponent(props) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add">Create Poll</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
      </li>
    </ul>
  )
}