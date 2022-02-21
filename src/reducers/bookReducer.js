const initialState = {
  items:[],
  loading:false,
  error:null,
};

export const bookReducer = (state = initialState, action) => {
  switch(action.type){
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        loading: true,
        error:null,
      };
      case "FETCH_BOOKS_SUCCESS":
          console.log(action.payload);
        return {
          ...state,
          loading: false,
          items: action.payload,
        };
        case "FETCH_BOOKS_FAILURE":
          console.log('error',action.error);
          return {
            ...state,
            loading: false,
            error:action.error,
            items: [],
          };
      default:
        console.log('state',state);
        return state;
    }
};
