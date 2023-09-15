const initialState = {
    chats: [],
    loadingCards: false,
  };
  
  export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case "load/chats/start":
        return {
          ...state,
          loadingCards: true,
        };
  
      case "load/chats/success":
        return {
          ...state,
          loadingCards: false,
          chats: action.payload,
        };
  
      default:
        return state;
    }
  };
  