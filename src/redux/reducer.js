import {ADD_CONTACT, REMOVE_CONTACT} from "./type";

const initalState = {
  contacts: []
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {...state, contacts: [...state.contacts, action.payload]};

    case REMOVE_CONTACT:
      const filteredContacts = [...state.contacts].filter((contact) => contact.id !== action.payload);

      return {...state, contacts: filteredContacts};

    default:
      return state;
  }
};

export default reducer;