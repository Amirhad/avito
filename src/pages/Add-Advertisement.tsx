//library
import React from "react";

//components
import { Button } from "../components/Button/Button";

//style
import styles from "./AddAdvertisement.module.css";
import { useState } from "react";
import { useActions } from "../hook/hook";

export const AddAdvertisement: React.FC = () => {
  const [nameOfAddAdvertisement, setNameOfAddAdvertisement] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const { SendDate } = useActions();
  const handleClick = () => {
    SendDate(nameOfAddAdvertisement, image, price, location);
  };

  return (
    <div className="container-3">
      <h1>Разместить объявление</h1>

      <div className={styles.title_AddAdvertisement}>
        <span>Названия объявления</span>
        <input
          type="text"
          placeholder="Названия объявления"
          value={nameOfAddAdvertisement}
          onChange={(e) => setNameOfAddAdvertisement(e.target.value)}
        />
      </div>

      <div className={styles.photo_AddAdvertisement}>
        <span>Картинка объявления</span>
        <input
          type="text"
          placeholder="Картинка объявления"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />{" "}
      </div>

      <div className={styles.description_AddAdvertisement}>
        <span>Описание</span>
        <textarea onChange={(e) => setDesc(e.target.value)} value={desc} />
        <span>Ваша локация</span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className={styles.price_AddAdvertisement}>
        <span>Цена</span>
        <select>
          <option disabled>цена от</option>
          <option value="1000p">1000p</option>
          <option value="2000p">2000p</option>
          <option value="3000p">3000p</option>
          <option value="4000p">4000p</option>
          <option value="5000p">5000p</option>
          <option value="6000p">6000p</option>
          <option value="7000p">7000p</option>
          <option value="8000p">8000p</option>
          <option value="9000p">9000p</option>
          <option value="10.000p">10.000p</option>
          <option value="11.000p">11.000p</option>
          <option value="12.000p">12.000p</option>
          <option value="13.000p">13.000p</option>
          <option value="14.000p">14.000p</option>
          <option value="15.000p">15.000p</option>
          <option value="16.000p">16.000p</option>
          <option value="17.000p">17.000p</option>
          <option value="18.000p">18.000p</option>
          <option value="19.000p">19.000p</option>
          <option value="20.000p">20.000p</option>
        </select>
        <p>или же введите свою сумму</p>
        <input
          type="text"
          placeholder="Введите вашу цену"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
      </div>

      <div className={styles.button_AddAdvertisement}>
        <Button
          text="Отправить"
          color="white"
          width="250px"
          onSubmit={handleClick}
        />
      </div>
    </div>
  );
};

//если будут ошибки нужно проверить redux and button files
