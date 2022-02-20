import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchBooks } from "../actions";

export function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return <h1>books</h1>;
}
