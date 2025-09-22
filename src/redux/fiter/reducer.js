import {FILTER_TASKS} from "./type";
import {filterInitalState} from "../initalState";

const filterReducer = (state = filterInitalState, action) => {
  switch (action.type) {
    case FILTER_TASKS:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;