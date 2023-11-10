import * as actionTypes from "../actionTypes";

interface MovieState {
  searchTerm: string;
  movies: any[];
  error: string | null;
  isLoading: boolean;
}

const initialState: MovieState = {
  searchTerm: "",
  movies: [],
  isLoading: false,
  error: null,
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case actionTypes.START_LOADING:
      return { ...state, isLoading: true, error: null };

    case actionTypes.STOP_LOADING:
      return { ...state, isLoading: false };

    case actionTypes.FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, error: null };

    case actionTypes.FETCH_MOVIES_ERROR:
      return { ...state, movies: [], error: action.payload };

    default:
      return state;
  }
};

export default movieReducer;
