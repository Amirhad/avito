import React from "react";
import styles from "../../pages/masseges.module.css";
import img from "../../assets/img.png";
export const Chat = ({ chat }) => {
  return (
    <div className={styles.chat}>
      <div className={styles.avatar_user}>
        <img src={img} alt="" />
      </div>

  <div className={styles.message_right_block}>
  <div className={styles.messages_userName}>
        <p>{chat.userName}</p>
      </div>

      <div className={styles.titleAd}>
        <p>{chat.nameOfAdvertisement}</p>
      </div>

      <div className={styles.message_from_user}>
        <p>{chat.message}</p>
      </div>
  </div>
    </div>
  );
};
