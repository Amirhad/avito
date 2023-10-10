import React from "react";

import styles from '../../styles/footer.module.scss'

export const Footer = () => {
  return (
    <div style={{marginTop:'100px'}}>
        <div className={styles.container_footer}>
      <div className={styles.footer_top}>
        <ul>
          <li>Разместить объявление </li>
          <li>Объявления</li>
          <li>Помощь</li>
          <li>Безопасность</li>
          <li>Реклама на сайте</li>
          <li> О компании</li>
          <li>Карьера</li>
          <li>Lincode-Авито Журнал</li>
          <li>Блог</li>
          <li>Мобильное приложение</li>
        </ul>
      </div>

      <div className={styles.footer_bottom}>
        <p>Lincode-Авито — Продукт от Lincode, аналог сайта объявлении (Авито). © ООО «Lincode Corporation» 2022–2023.</p>
      </div>
    </div>
    </div>
  );
};
