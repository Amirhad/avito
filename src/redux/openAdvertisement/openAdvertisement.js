const initialState = {
  image: [],
  desc:  [],
  adress:[],
  phone: [],
  title: [],
  loading: false,
};

export const openAdvertisementReducer = (state = initialState, action) => {
  switch (action.type) {

    case "load/desc/start":
      return {
        ...state,
        loading: true,
      };
    case "load/desc/success":
      return {
        ...state,
        loading: false,
        desc: action.payload,
      };


    case "load/image/start":
      return {
        ...state,
        loading: true,
      };
    case "load/image/success":
      return {
        ...state,
        loading: false,
        image: action.payload,
      };



      case "load/adress/start":
        return {
          ...state,
          loading: true,
        };
      case "load/adress/success":
        return {
          ...state,
          loading: false,
          adress: action.payload,
        };

  
      case "load/phone/start":
        return {
          ...state,
          loading: true,
        };
      case "load/phone/success":
        return {
          ...state,
          loading: false,
          phone: action.payload,
        };
  

      
    case "load/title/start":
      return {
        ...state,
        loading: true,
      };
    case "load/title/success":
      return {
        ...state,
        loading: false,
        title: action.payload,
      };



 
    default:
      return state;
  }
};
