import React, { useContext } from "react";
import Loader from "../Loader/Loader";
import RepoItem from "./RepoItem";

import GitHubContext from "../../context/GitHub/GitHubContext";

const Repos = () => {
  const githubContext = useContext(GitHubContext);
  const { loading, repos } = githubContext;
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        {repos.length > 0 && (
          <div>
            <h2 style={{ textAlign: "center" }}>Latest Repos</h2>
          </div>
        )}
        {repos.map(repo => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    );
  }
};

export default Repos;
