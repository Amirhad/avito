import { Dispatch } from "redux";
import { EnumActionTypes, ReduxAction } from "../../types";

export const SendDate = (nameOfAddAdvertisement:string, image:string, price:string, location:string) => {
  return (dispatch:Dispatch<ReduxAction>) => {
    dispatch({ type: EnumActionTypes.FETCH_SEND });

    fetch("http://localhost:8080/advertisement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: nameOfAddAdvertisement,
        price: price,
        image: image,
        location: location,
        date: "Сегодня в 19:36",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: EnumActionTypes.FETCH_SEND_FULFILLED,
          payload: data,
        });
      });
  };
};
// какой деск