import {
  SEARCH_REPOSITORIES,
  CLEAR_REPOSITORIES,
  GET_REPOS,
  SAVED_REPOSITORIES,
  DELETE_REPOSITORIES,
} from '../Types';
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SEARCH_REPOSITORIES:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_REPOSITORIES:
      return {
        ...state,
        repos: [],
        loading: false,
      };
    case SAVED_REPOSITORIES:
      return {
        ...state,
        savedRepositories: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        savedRepositories: action.payload,
        loading: false,
      };
    case DELETE_REPOSITORIES:
      return {
        ...state,
        savedRepositories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
