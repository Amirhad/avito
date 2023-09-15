import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Component 1.svg";

import styles from "../content.module.css";
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
