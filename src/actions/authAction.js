import { LOGIN, LOGOUT } from "../actionTypes";

/**
 * login action creator
 */
export const login = () => {
  return {
    type: LOGIN
  };
};

/**
 * logout action creator
 */
export const logout = () => {
  return {
    type: LOGOUT
  };
};
