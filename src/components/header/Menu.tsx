import React from 'react'

import style from '../../styles/header.module.scss'
export const  Menu:React.FC = ()=>  {
  return (
    <div className={style.menu}>
    <ul>
      <li>Для бизнеса</li>
      <li>Lincode Avito Pro</li>
      <li>Вакансии</li>
      <li>Помощь</li>
      <li>Каталоги</li>
    </ul>

    </div>
  )
}

