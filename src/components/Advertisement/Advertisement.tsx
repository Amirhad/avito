import React from "react";
import styles from "../../styles/Advertisement.module.scss";
import lin from "../../assets/lin.png";
export const Advertisement:React.FC = () => {
  return (
    <div className={styles.advertisement}>
      <h1>Мои объявления</h1>
      <br />
      <br />

      <div className={styles.border_bottom}>
        <div className={styles.actived_and_archived}>
          <span className={styles.actived}>Активные</span>
          <span className={styles.archived}>Архив</span>
        </div>
      </div>

      <div className={styles.advertisement_block}>
        <div className={styles.advertisement_image}>
          <img src={lin} alt="" />
        </div>

        <div className={styles.advertisement_text}>
          <p className={styles.course}>Курсы программирования (Frontend-разработка)</p>
          <p className={styles.price}>35.000₽ за услугу</p>
          <p className={styles.location}>Чеченская Республика, Грозный</p>
        </div>
      </div>
    </div>
  );
};
