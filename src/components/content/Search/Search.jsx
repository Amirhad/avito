import React from "react";

import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";

import styles from "../content.module.css";
export const Search = () => {
  return (
    <div className={styles.search}>
      <>
    <Input placeholder='Поиск по объявлениям' width='800px'/>
      </>

    <>
        <Button text={'найти'} color='white' width='200px'/>
    </>

    </div>
  );
};
