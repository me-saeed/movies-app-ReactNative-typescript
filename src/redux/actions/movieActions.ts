import * as actionTypes from "../actionTypes";
import { Dispatch } from "redux";
import { apiKey } from "../../config/config";
export const startLoading = () => ({
  type: actionTypes.START_LOADING,
});

export const stopLoading = () => ({
  type: actionTypes.STOP_LOADING,
});

export const setSearchTerm = (term: string) => ({
  type: actionTypes.SET_SEARCH_TERM,
  payload: term,
});

export const fetchMovies = (searchTerm: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoading());

      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
      );
      const data = await response.json();

      dispatch({
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        payload: data.Search || [],
      });

      dispatch(stopLoading());
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_MOVIES_ERROR,
        payload: "Unable to Fetch from API",
      });

      dispatch(stopLoading());
    }
  };
};
