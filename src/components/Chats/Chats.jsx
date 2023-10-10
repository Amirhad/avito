import React from "react";
import { Chat } from "./Chat";
import styles from "../../styles/messages.module.scss";
import { useSelector } from "react-redux";

export const Chats = () => {
  const chats = useSelector((state) => state.chats.chats);

  return (
    <div className={styles.chats}>
      {chats.map((chat) => (
        <Chat chat={chat} />
      ))}
    </div>
  );
};
