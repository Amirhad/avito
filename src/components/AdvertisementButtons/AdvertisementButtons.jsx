import React from "react";
import { Button } from "../Button/Button";

import styles from "../../styles/buttons.module.scss";


import dog from '../../assets/dog.svg'
import filtered from '../../assets/filtered.svg'

export const AdvertisementButtons = () => {
  return (
    <div className={styles.buttons_container}>
      <Button
        text="Добавить в избранное"
        color="white"
        width="200px"
        icon={dog} />

      <Button 
        text="Сравнить"
        color="white"
        width="200px"
        icon={filtered} />
    </div>
  );
};
