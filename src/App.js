import { useSelector, useDispatch } from "react-redux";

import { Books } from "../src/components/Books";

export default function App() {
  /*const count = useSelector((state) => state);
  const dispatch = useDispatch(count);*/
  return (
    <div className="App">
      <Books />
    </div>
  );
}
