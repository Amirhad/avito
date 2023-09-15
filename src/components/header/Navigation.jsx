//library
import React from "react";
import { Link } from "react-router-dom";
import useOutsideAlerter from "../../hook/UseOutside";

//components
import { Button } from "../Button/Button";
import { DropDown } from "../DropDown/DropDown";

//styles
import styles from "./header.module.css";

//image
import heart from "../../assets/heart-header.svg";
import accaunt from "../../assets/menu-logo.png";
import message from "../../assets/message.svg";

export const Navigation = () => {
  const { ref, isShow, setIsShow } = useOutsideAlerter(false);

  return (
    <div className={styles.navigation}>
      <div className={styles.heart}>
        <img src={heart} alt="heart" />
      </div>

      <div className={styles.message}>
        <Link to="/message">
          <img src={message} alt="message" />
        </Link>
      </div>

      <div className={styles.announcement}>
        <Link to="/My/advertisement">Мои объявления</Link>
      </div>



      <div className={styles.accaunt} ref={ref} onClick={() => setIsShow(!isShow)}>
        <div className={styles.avatar}>
          <img src={accaunt} alt="accaunt" />
        </div>




          <p className={styles.p} >
            {" "}
            Lincode
          </p>
          {isShow ? (
            <div className={styles.dropdown_content}>
              <DropDown />
            </div>
          ) : (
            ""
          )}
      </div>
      <Link to="/add/advertisement">
        <Button color="white" text="Разместить объявление" width="205px" />
      </Link>
    </div>
  );
};
//onClick={() => setIsShow(!isShow)}

// {isShow ? (
//<div className={styles.absolute} ref={ref}>
//<DropDown />
//</div>
