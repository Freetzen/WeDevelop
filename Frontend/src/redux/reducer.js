import { LOAD_USER_DATA } from "./actions-types";


const initialState = {
    userData: JSON.parse(localStorage.getItem('info')) || null,
};
  

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_USER_DATA:
        return {
          ...state,
          userData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  