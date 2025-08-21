import React, { useContext } from 'react'
import {AuthContext} from './AuthContext'

const Navbar = () => {
      const { isLoggedIn, logout } = useContext(AuthContext);
    
  return (
    <nav>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  )
}

export default Navbar