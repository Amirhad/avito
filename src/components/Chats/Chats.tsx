import React from "react";
import { Chat } from "./Chat";
import styles from "../../styles/messages.module.scss";
import { useTypedSelector } from "../../hook";

export const Chats:React.FC = () => {
  const chats = useTypedSelector((state) => state.chats.chats);

  return (
    <div className={styles.chats}>
      {chats.map((chat) => (
        <Chat chat={chat} />
      ))}
    </div>
  );
};
