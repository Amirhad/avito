//library
import React from "react";

//components
import { Cards } from "./Cards/Cards";

//styles
import styles from "../../../styles/content.module.scss";

export const Recommended:React.FC = () => {
  return (
    <div className={styles.recommended_ads_container}>
      <h1>Рекомендации для вас</h1>
      <Cards />
    </div>
  );
};
