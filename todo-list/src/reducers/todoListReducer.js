import { TYPES } from "../actionTypes/actions";

export const initialState = [];

export const todoListReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, { description: action.description }]
      };
    case TYPES.REMOVE_ALL_TASKS:
      return {
        initialState,
      };
    default:
      return state;
  }
};