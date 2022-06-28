import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';
import {
  SEARCH_REPOSITORIES,
  SET_LOADING,
  CLEAR_REPOSITORIES,
  SAVED_REPOSITORIES,
  GET_REPOS,
} from '../Types';

const GithubState = (props) => {
  const initialState = {
    repos: [],
    savedRepositories: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const SearchRepositories = async (text) => {
    setLoading();
    const res =
      await axios.get(`https://api.github.com/search/repositories?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&per_page=5`);
    dispatch({
      type: SEARCH_REPOSITORIES,
      payload: res.data.items,
    });
  };
  const saveRepositories = (repo) => {
    const savedRepos = localStorage.getItem('repos');
    let repos = {};

    if (!savedRepos) {
      repos[repo.id] = repo;
      console.log(repos);
    } else {
      repos = JSON.parse(savedRepos);
      if (!repos[repo.id]) repos[repo.id] = repo;
    }

    localStorage.setItem('repos', JSON.stringify(repos));
    dispatch({
      type: SAVED_REPOSITORIES,
      payload: repos,
    });
  };

  const getSavedRepos = () => {
    const savedRepos = localStorage.getItem('repos');
    const repos = JSON.parse(savedRepos);
    dispatch({
      type: GET_REPOS,
      payload: repos,
    });
  };

  const clearRepositories = () => dispatch({ type: CLEAR_REPOSITORIES });

  const deleteRepository = (id) => {
    const savedRepos = localStorage.getItem('repos');
    const repos = JSON.parse(savedRepos);

    delete repos[id];

    localStorage.setItem('repos', JSON.stringify(repos));

    dispatch({
      type: SAVED_REPOSITORIES,
      payload: repos,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        loading: state.loading,
        savedRepositories: state.savedRepositories,
        SearchRepositories,
        clearRepositories,
        saveRepositories,
        getSavedRepos,
        deleteRepository,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
