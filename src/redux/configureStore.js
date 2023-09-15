import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { chatReducer } from "./chatsReducer/chatsReducer";
import { AdvertisementReducer } from "./homeAdvertisementReducer/advertisement";
import { openAdvertisementReducer } from "./openAdvertisement/openAdvertisement";
import { sendDate } from "./sendDate/SendReducer";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  cards: AdvertisementReducer,
  openCards: openAdvertisementReducer,
  sendDate:sendDate,
  chats:chatReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk,logger));
