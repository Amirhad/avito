import React from 'react'
import { Menu } from '../components/Menu'
import { Messeges } from '../components/Messeges'

import styles from './masseges.module.css'

export const Message:React.FC = () => {
  return (
    <div className={styles.container}>
        <Menu/>
        <Messeges/>
    </div>
  )
}
