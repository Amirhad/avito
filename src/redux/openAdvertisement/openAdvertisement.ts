import { EnumActionTypes, ReduxAction } from "../../types";

const initialState = {
  image: [],
  desc:  [],
  adress:[],
  phone: [],
  title: [],
  loading: false,
};

export const openAdvertisementReducer = (state = initialState, action:ReduxAction) => {
  switch (action.type) {

    case EnumActionTypes.FETCH_DESC:
      return {
        ...state,
        loading: true,
      };
    case EnumActionTypes.FETCH_DESC_FULFILLED:
      return {
        ...state,
        loading: false,
        desc: action.payload,
      };


    case EnumActionTypes.FETCH_IMG:
      return {
        ...state,
        loading: true,
      };
    case EnumActionTypes.FETCH_IMG_FULFILLED:
      return {
        ...state,
        loading: false,
        image: action.payload,
      };



      case EnumActionTypes.FETCH_ADRESS:
        return {
          ...state,
          loading: true,
        };
      case EnumActionTypes.FETCH_ADRESS_FULFILLED:
        return {
          ...state,
          loading: false,
          adress: action.payload,
        };

  
      case EnumActionTypes.FETCH_PHONE:
        return {
          ...state,
          loading: true,
        };
      case EnumActionTypes.FETCH_PHONE_FULFILLED:
        return {
          ...state,
          loading: false,
          phone: action.payload,
        };
  

      
    case EnumActionTypes.FETCH_TITILE:
      return {
        ...state,
        loading: true,
      };
    case EnumActionTypes.FETCH_TITILE_FULFILLED:
      return {
        ...state,
        loading: false,
        title: action.payload,
      };



 
    default:
      return state;
  }
};
