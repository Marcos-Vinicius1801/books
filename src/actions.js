import { Axios } from "axios";


export const fetchBooks = () => {
  return async (dispatch, getState) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );

    console.log(response.data);

    dispatch({
      type: "FETCH_BOOKS",
      payload: response.data
    });
  };
};
