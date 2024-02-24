import { LOAD_USER_DATA } from "./actions-types";


export const loadUserData = () => ({
    type: LOAD_USER_DATA,
    payload: JSON.parse(localStorage.getItem('info')),
  });