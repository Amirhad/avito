import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Component 1.svg";

import styles from "../../../styles/content.module.scss";
export const Logo:React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
