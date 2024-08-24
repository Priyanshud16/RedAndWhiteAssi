import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <Link to="/post">Post Request</Link>
      <Link to="/get">Get Request</Link>
    </div>
  )
}

export default Navbar
