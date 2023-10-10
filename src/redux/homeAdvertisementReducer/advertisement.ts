import { EnumActionTypes, ReduxAction } from "../../types";



interface CardsType {
cards: []
loadingCards:boolean
}


const initialState:CardsType = {
  cards: [],
  loadingCards: false,
};

export const AdvertisementReducer = (state = initialState, action:ReduxAction) => {
  switch (action.type) {
    case EnumActionTypes.FETCH_CARDS:
      return {
        ...state,
        loadingCards: true,
      };

    case EnumActionTypes.FETCH_CARDS_FULFILLED:
      return {
        ...state,
        loadingCards: false,
        cards: action.payload,
      };

    default:
      return state;
  }
};
