const initialState = {
  cards: [],
  loadingCards: false,
};

export const AdvertisementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/cards/start":
      return {
        ...state,
        loadingCards: true,
      };

    case "load/cards/success":
      return {
        ...state,
        loadingCards: false,
        cards: action.payload,
      };

    default:
      return state;
  }
};
