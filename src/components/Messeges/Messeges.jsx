import React from "react";

import styles from "../../pages/masseges.module.css";
import { Chats } from "../Chats";
import { MessegesButton } from "./Messeges_button";

export const Messeges = () => {
  return (
    <div className={styles.messeges}>
      <span>Сообщения</span>
      <MessegesButton/>
      <Chats/>
    </div>
  );
};
