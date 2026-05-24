import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <Link className='header__link' to="/">
          <span >
            juan
          </span>
        </Link>
    </nav>
    
  )
}

export default Header