import { fetchBooks } from "../../actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import{ Container } from './styled';

export function BookList() {
  
  const state = useSelector((state) => state);
  const dispatch = useDispatch(state);
   

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const renderBooks = () => {
    if(state.loading){
      return <h1>Loading</h1>
    }

     
    return state.items.map((items, index) => {
      return <li key={index}><img src={items.img} height={'39px'} width={'150px'}/></li>
    }) 
  }
  return(
    <div>
      <Container>
        <ul>
          { renderBooks()}
        </ul>
      </Container>
   </div>
  );
}
