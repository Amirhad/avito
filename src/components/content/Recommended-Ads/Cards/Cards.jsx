import React from "react";
import {useSelector} from "react-redux";

import styles from "./cards.module.css";
import { Card } from "./Card";

export const Cards = () => {
 
  const cards = useSelector((state) => state.cards.cards)

  return (
    <div className={styles.cards_container}>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};
