import React from 'react';
import NavDefault from './NavDefault';
import { useSelector } from 'react-redux'
import NavEmployee from './NavEmployee';


function Header() {

  const userInfo = null

  return (
    <div>
      <header>
          {userInfo ? 
            <NavEmployee /> 
          : 
            <NavDefault />
          }
        </header>
    </div>
  )
}

export default Header