import React from "react";

import styles from "../../styles/messages.module.scss";
import { Chats } from "../Chats";
import { MessegesButton } from "./Messeges_button";

export const Messeges:React.FC = () => {
  return (
    <div className={styles.messeges}>
      <span>Сообщения</span>
      <MessegesButton/>
      <Chats/>
    </div>
  );
};
