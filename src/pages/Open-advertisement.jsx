import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AdvertisementButtons } from "../components/AdvertisementButtons";

import { Breadcrums } from "../components/Breadcrums";
import { Button } from "../components/Button/Button";
import { Description } from "../components/Description";
import { Location } from "../components/Location/Location";
import { Slider } from "../components/Slider";
import { TitleAndPrice } from "../components/TitleAndPrice";

export const OpenAdvertisement = () => {
  const id = parseInt(useParams().id);
  const desc = useSelector((state) => state.openCards.desc);
  const address = useSelector((state) => state.openCards.adress);
  const image = useSelector((state) => state.openCards.image);
  const phone = useSelector((state) => state.openCards.phone);
  const title = useSelector((state) => state.openCards.title);

  return (
    <div className="container-3">
      <>
        <Breadcrums />
        {title
          .filter((elem) => elem.id === id)
          .map((item) => (
            <TitleAndPrice item={item} />
          ))}

        <AdvertisementButtons />

        <div className="sliders_and_buttons">
          <div className="slider_left">
            {image
              .filter((elem) => elem.id === id)
              .map((item) => (
                <Slider item={item} />
              ))}
          </div>

          <div className="buttons_right">
            {phone
              .filter((elem) => elem.id === id)
              .map((item) => {
                return (
                  <>
                    <Button
                      text={item.phone}
                      padding="15px"
                      color="white"
                      width="300px"
                      fontSize="23px"
                    />
                    <br />
                    <br />

                    <Button
                      text="Написать сообщение"
                      padding="15px"
                      color="white"
                      width="300px"
                      fontSize="23px"
                    />
                  </>
                );
              })}
          </div>
        </div>
        {address
          .filter((elem) => elem.id === id)
          .map((item) => (
            <Location item={item} />
          ))}

        {desc
          .filter((elem) => elem.advertisementId === id)
          .map((item) => (
            <Description item={item} />
          ))}
      </>
    </div>
  );
};
