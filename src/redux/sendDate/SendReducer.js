const initialState = {
    sendDate: [],
    loading: false,
  };
  
  export const sendDate = (state = initialState, action) => {
    switch (action.type) {
      case "send/data/start":
        return {
          ...state,
          loading: true,
        };
  
      case "send/data/success":
        return {
          ...state,
          loading: false,
          sendDate: action.payload,
        };
  
      default:
        return state;
    }
  };
  