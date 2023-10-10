import { Dispatch } from "react";
import { EnumActionTypes, ReduxAction } from "../../types";

export const chats = () => {
  return (dispatch:Dispatch<ReduxAction>):void => {
    dispatch({ type:  EnumActionTypes.FETCH_CHATHS});

    fetch("http://localhost:8080/chats")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: EnumActionTypes.FETCH_CHATHS_FULFILLED,
          payload: data,
        });
      });
  };
};
