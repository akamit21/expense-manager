import { ADD_ACCOUNT } from "../actionTypes";

export const addAccount = data => {
  return {
    type: ADD_ACCOUNT,
    payload: data
  };
};
