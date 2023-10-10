import { EnumActionTypes, ReduxAction } from "../../types";

interface initialStateType{
  sendDate:[]
  loading:boolean
}

const initialState:initialStateType = {
    sendDate: [],
    loading: false,
  };
  
  export const sendDate = (state = initialState, action:ReduxAction) => {
    switch (action.type) {
      case EnumActionTypes.FETCH_SEND:
        return {
          ...state,
          loading: true,
        };
  
      case EnumActionTypes.FETCH_SEND_FULFILLED:
        return {
          ...state,
          loading: false,
          sendDate: action.payload,
        };
  
      default:
        return state;
    }
  };
  