import {api} from '../src/services/api'

export const fetchBooks = () =>  async (dispatch, getState) => {
  dispatch({type: "FETCH_BOOKS_REQUEST"})
     try{
      const response = await api.get('/books');
      
 
      dispatch({type: "FETCH_BOOKS_SUCCESS", payload:response.data.books},
      
      );
      

    } catch(error){
      dispatch({type: "FETCH_BOOKS_FAILURE", err:error})
    }
};