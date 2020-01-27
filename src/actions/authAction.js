import { LOGIN, LOGOUT } from "../actionTypes";

/**
 * Login action creator
 */
export const login = () => {
  return {
    type: LOGIN
  };
};

/**
 * Logout action creator
 */
export const logout = () => {
  return {
    type: LOGOUT
  };
};
