import {FILTER_TASKS} from "./type";

export const filterTasks = (keyword) => {
  return {type: FILTER_TASKS, payload: keyword};
};