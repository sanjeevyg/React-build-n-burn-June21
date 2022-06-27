// import {CartIcon} from '../icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


import React from 'react'

export default function Navbar() {
  return (
      <nav>
          <div className="nav-center">
              <h3>Redux Test</h3>
              <div className='links'>
                <Link to="/">Home</Link>
              </div>
              <div className='links'>
                <Link to="/test">Test</Link>
              </div>
              <div className='links'>
                <Link to="/about">About</Link>
              </div>
          </div>
      </nav>
  )
}

