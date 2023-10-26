import React from "react";
import styles from "../../styles/messages.module.scss";
import img from "../../assets/img.png";

interface ChatType {
  chat: Array<{
    userName: string
    nameOfAdvertisement: string,
    message: string
    messageId:number 
  }
  >
}

export const Chat:React.FC<ChatType> = ({ chat }) => {
 



  return (<div className={styles.chat}>
    {chat.map((item) => (
      <div key={item.messageId} className={styles.message}>
        <div className={styles.avatar_user}>
          <img src={img} alt="" />
        </div>

        <div className={styles.message_right_block}>
          <div className={styles.messages_userName}>
            <p>{item.userName}</p>
          </div>

          <div className={styles.titleAd}>
            <p>{item.nameOfAdvertisement}</p>
          </div>

          <div className={styles.message_from_user}>
            <p>{item.message}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
};



