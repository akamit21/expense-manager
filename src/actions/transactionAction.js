import { LIST_TRANSACTION, ADD_TRANSACTION } from "../actionTypes";

// action creator
export const listTransaction = () => {
  return {
    type: LIST_TRANSACTION
  };
};
export const addTransaction = data => {
  return {
    type: ADD_TRANSACTION,
    payload: data
  };
};
