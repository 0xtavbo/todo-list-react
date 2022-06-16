import { TYPES } from "../actionTypes/actions";

export const initialState = [];

export const todoListReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      return [
        ...state,
        { description: action.description },
      ];
    case TYPES.REMOVE_ALL_TASKS:
      return {
        initialState,
      };
    default:
      return state;
  }
};

export function addTask(text) {
  return {
    type: TYPES.ADD_TASK,
    description: text
  };
}

export function removeAll() {
  return {
    type: TYPES.REMOVE_ALL_TASKS
  };
}