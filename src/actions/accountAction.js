import { ADD_ACCOUNT } from "../actionTypes";

/**
 * Add account action creator
 * @param {*} data
 */
export const addAccount = data => {
  return {
    type: ADD_ACCOUNT,
    payload: data
  };
};
