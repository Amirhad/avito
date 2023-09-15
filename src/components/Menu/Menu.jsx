//library
import React from "react";
import { useLocation } from "react-router-dom";

//components
import { MenuLogo } from "./MenuLogo";
import { MenuRating } from "./MenuRating";
import { MenuTitle } from "./MenuTitle";

//styles
import styles from "../../pages/masseges.module.css";

export const Menu = () => {
  const { pathname } = useLocation();
  const label = [
    {
      label: "Мои объявления",
      path: "/My/advertisement",
    },
    {
      label: "Заказы",
    },
    {
      label: "Мои отзывы",
    },
    {
      label: "Избранное",
    },
    {
      label: "Резюме",
    },
    {
      label: "Сообщения",
      path:'/message'
    },
    {
      label: "Уведомления",
    },
    {
      label: "Кошелек",
    },
    {
      label: "Платные услуги",
    },
    {
      label: "Для профессионалов",
    },
    {
      label: "Спецпредложения",
    },
    {
      label: "Управление профилем",
    },
    {
      label: "Защита профиля",
    },
    {
      label: "Настройки",
    },
    {
      label: "Lincode-Авито доставка",
    },
  ];
  return (
    <div className={styles.menu}>
      <MenuLogo />
      <MenuTitle />
      <MenuRating />

      <br />
      <br />
      {label.map((lab, index) => (
        <>
          <ul key={index}>
            <li
              className={`${lab.path === pathname ? styles.active : ""}`}
              key={index}
            >
              {lab.label}
            </li>
          </ul>
          <hr />
        </>
      ))}
    </div>
  );
};
