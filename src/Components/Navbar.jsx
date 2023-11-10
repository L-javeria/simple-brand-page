import React from 'react'
import logo from '../Assets/Nike-Logo.png'
import styles from './navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.navbar} >
      <div className={styles.nike}>
        <img src={logo} alt="Nike-Logo" />
        </div>
        <div className={styles.contents}> 
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        </div>
        <button>Login</button>
    </div>
   
  )
}

export default Navbar