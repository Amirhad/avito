//library
import React from 'react'

//image
import menu from    '../../assets/menu-logo.png'

//styles
import styles from "../../pages/masseges.module.css"



export const MenuLogo = () => {
  return (
    <div className={styles.menu_logo}>
        <img src={menu} alt="menu" />
    </div>
  )
}
