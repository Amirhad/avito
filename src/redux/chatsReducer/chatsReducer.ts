import { EnumActionTypes, ReduxAction } from "../../types";

interface ChatsType {
  chats: Array<{
   messageId: number
   userName:string 
   nameOfAdvertisement: string,
   message: string}
  >
  loadingCards: boolean;
}

const initialState:ChatsType = {
  chats: [],
  loadingCards: false,
};

export const chatReducer = (state = initialState, action:ReduxAction) => {
  switch (action.type) {
    case EnumActionTypes.FETCH_CHATHS:
      return {
        ...state,
        loadingCards: true,
      };

    case EnumActionTypes.FETCH_CHATHS_FULFILLED:
      return {
        ...state,
        loadingCards: false,
        chats: action.payload,
      };

    default:
      return state;
  }
};
