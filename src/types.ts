export enum EnumActionTypes {
  FETCH_SEND = "FETCH_SEND",
  FETCH_SEND_FULFILLED = "send/data/success",


  FETCH_DESC = "load/desc/start",
  FETCH_DESC_FULFILLED = "load/desc/success",


  FETCH_IMG = "load/image/start",
  FETCH_IMG_FULFILLED = "load/image/success",


  FETCH_ADRESS = "load/adress/start",
  FETCH_ADRESS_FULFILLED = "load/adress/success",


  FETCH_PHONE =  "load/phone/start",
  FETCH_PHONE_FULFILLED = "load/phone/success",


  FETCH_TITILE = "load/title/start",
  FETCH_TITILE_FULFILLED = "load/title/success",


  FETCH_CARDS = "load/cards/start",
  FETCH_CARDS_FULFILLED = "load/cards/success",


  FETCH_CHATHS = "load/chats/start",
  FETCH_CHATHS_FULFILLED = "load/chats/success",
}




//send
interface FetchSendAction {
  type: EnumActionTypes.FETCH_SEND;
}

interface FetchSendActionFulfilled {
  type: EnumActionTypes.FETCH_SEND_FULFILLED;
  payload: any[];
}


//desc
interface FetchDescAction {
    type: EnumActionTypes.FETCH_DESC;
  }
  
  interface FetchDescActionFulfilled {
    type: EnumActionTypes.FETCH_DESC_FULFILLED;
    payload: any[];
  }
  

//img
  interface FetchImgAction {
    type: EnumActionTypes.FETCH_IMG;
  }
  
  interface FetchImgActionFulfilled {
    type: EnumActionTypes.FETCH_IMG_FULFILLED;
    payload: any[];
  }
  

// ADRESS 

interface FetchAdressAction {
    type: EnumActionTypes.FETCH_ADRESS;
  }
  
  interface FetchAdressActionFulfilled {
    type: EnumActionTypes.FETCH_ADRESS_FULFILLED;
    payload: any[];
  }


//PHONE 

interface FetchPhoneAction {
    type: EnumActionTypes.FETCH_PHONE;
  }
  
  interface FetchPhoneActionFulfilled {
    type: EnumActionTypes.FETCH_PHONE_FULFILLED;
    payload: any[];
  }



//TITLE

interface FetchTitleAction {
    type: EnumActionTypes.FETCH_TITILE;
  }
  
  interface FetchTitleActionFulfilled {
    type: EnumActionTypes.FETCH_TITILE_FULFILLED;
    payload: any[];
  }



//CARDS 

interface FetchCardsAction {
    type: EnumActionTypes.FETCH_CARDS;
  }
  
  interface FetchCardsActionFulfilled {
    type: EnumActionTypes.FETCH_CARDS_FULFILLED;
    payload: any[];
  }


//CHATS


interface FetchChatsAction {
    type: EnumActionTypes.FETCH_CHATHS;
  }
  
  interface FetchChatsActionFulfilled {
    type: EnumActionTypes.FETCH_CHATHS_FULFILLED;
    payload: any[];
  }

export type ReduxAction = 
| FetchSendAction
| FetchSendActionFulfilled
| FetchDescAction
| FetchDescActionFulfilled
| FetchImgAction
| FetchImgActionFulfilled
| FetchAdressAction
| FetchAdressActionFulfilled
| FetchPhoneAction
| FetchPhoneActionFulfilled
| FetchTitleAction
| FetchTitleActionFulfilled
| FetchCardsAction
| FetchCardsActionFulfilled
| FetchChatsAction
| FetchChatsActionFulfilled