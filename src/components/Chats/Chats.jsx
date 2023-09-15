import React from "react";
import styles from "../../pages/masseges.module.css";
import { Chat } from "./Chat";
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
