import { Dispatch } from "redux";
import { EnumActionTypes, ReduxAction } from "../../types";

export const chats = () => {
  return (dispatch:Dispatch<ReduxAction>) => {
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
