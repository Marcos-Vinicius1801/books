import { createStore } from "redux";

const initialState = [];

export const bookReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(bookReducer);
