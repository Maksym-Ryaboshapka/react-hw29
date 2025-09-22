import {ADD_CONTACT, REMOVE_CONTACT} from "./type";
import {contactsInitalState} from "../initalState";

const contactsReducer = (state = contactsInitalState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

export default contactsReducer;