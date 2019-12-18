import React, { useReducer } from "react";
import axios from "axios";
import GitHubContext from "./GitHubContext";
import GitHubReducer from "./GitHubReducer";
import {
  SEARCH_USER,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USER_REPOS
} from "../actions/types";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "../../GitHubConfig";

const GitHubState = props => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: []
  };
  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  //Search user
  const searchUser = async query => {
    // console.log(query);
    try {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/search/users?q=${query}&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`
      );

      dispatch({ type: SEARCH_USER, payload: res.data.items });
    } catch (error) {
      console.log(error);
    }
  };

  //Get User
  const getUser = async login => {
    try {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/users/${login}?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`
      );
      dispatch({ type: GET_USER, payload: res.data });

      //  console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //Get repos
  const getUserRepos = async login => {
    try {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`
      );
      dispatch({ type: GET_USER_REPOS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  //Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Provider
  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
