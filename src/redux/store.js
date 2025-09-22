import {combineReducers, createStore} from "redux";

import contactsReducer from "./contacts/reducer";
import filterReducer from "./fiter/reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer);

export default store;