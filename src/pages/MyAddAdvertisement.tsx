import React from "react";
import { Advertisement } from "../components/Advertisement/Advertisement";
import { Menu } from "../components/Menu";

import styles from "../pages/masseges.module.css";
export const MyAddAdvertisement:React.FC = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Advertisement/>
    </div>
  );
};
