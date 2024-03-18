// import React from 'react'
import style from './NavBar.module.scss'

const NavBar = () => {
  return (
    <div className={style.navContainer}>
        <div className={style.logo}>
            <img src="/Hidroelectrica - Logo.png" alt="" />
            <h2>CHE Robești</h2>
        </div>
        <ul>
            <a href="/#calculOre"><li>Ore Functionare</li></a>
            <a href="/#deversare"><li>Debit Deversat</li></a>
        </ul>
    </div>
  )
}

export default NavBar