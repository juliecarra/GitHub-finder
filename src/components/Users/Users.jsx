import React, { useContext } from "react";
import UserItem from "./UserItem";
import Loader from "../Loader/Loader";

import "./Users.css";
import GitHubContext from "../../context/GitHub/GitHubContext";

const Users = () => {
  const githubContext = useContext(GitHubContext);

  const { loading, users } = githubContext;
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="Users">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
