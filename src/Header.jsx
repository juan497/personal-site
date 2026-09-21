import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
  return (
<div className='header'> 
  {/* Reduced bottom margin to bring the text closer */}
  <h1 style={{ fontSize: '90px', marginBottom: '5px', marginTop: '0px' }}>Juan Hernandez</h1> 
  
  {/* Removed top margin to eliminate the gap with the heading */}
  <p style={{ fontSize: '29px', marginTop: '0px', marginBottom: '25px' }}>
    Algorithms, Data Structures, Networking, Concurrency, Machine Learning, Artist
  </p> 
  
  {/* Flex container separates the links horizontally */}
  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
    <a className='header__link' href="/">Home</a> 
    <a className='header__link' href="https://github.com/juan497" > <GitHubIcon /> Visit GitHub </a> 
    <a className='header__link' href="/AboutMe">About Me</a> 
  </div>
</div>
    
    
    
  )
}

export default Header