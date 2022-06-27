import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function testPage() {
  return (
    <div>
      <Link to="/test/testOne">TestOne</Link>
      <Link to="/test/testTwo">TestTwo</Link>
      <div>Some Test Page</div>
      <Outlet />
   
    </div>
  )
}
