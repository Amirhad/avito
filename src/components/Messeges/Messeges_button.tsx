import React from "react";
import { Button } from "../Button/Button";
import styles from "../../styles/messages.module.scss";

export const MessegesButton:React.FC = () => {
  return (
    <div className={styles.messegesButton}>
      <div className={styles.all_messages}>
        <Button 
        text="Все сообщения"
         width="200px" 
         color="white" />
      </div>
      <div className={styles.filtered_button}>
        <Button
         text="Фильтр"
          width="200px"
           color="white" />
      </div>
      <div className={styles.serch_form}>
        <input 
        type="text"
        placeholder="Поиск по сообщениям..."
         />
      </div>
    </div>
  );
};
