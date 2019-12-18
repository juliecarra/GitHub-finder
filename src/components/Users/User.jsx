import React, { useEffect, useContext } from "react";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Repos from "../Repos/Repos";
import "./User.css";

import GitHubContext from "../../context/GitHub/GitHubContext";

const User = ({ match }) => {
  const githubContext = useContext(GitHubContext);
  const { user, loading, getUser, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    login,
    html_url,
    followers,
    following,
    public_repos
  } = user;

  if (loading) return <Loader />;

  const cardStyle = {
    width: "50rem",
    marginTop: "50px"
  };

  const buttonStyle = {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center"
  };
  return (
    <div className="User">
      <Button style={buttonStyle}>
        {" "}
        <Link to="/">
          <div style={{ color: "#fff" }}>Back </div>
        </Link>
      </Button>
      <div className="container">
        <Card style={cardStyle}>
          <Card.Img variant="top" src={avatar_url} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>

            <ListGroup variant="flush">
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-at"></i> {login} <br />
              </ListGroup.Item>
              {bio ? (
                <ListGroup.Item>
                  <i className="fas fa-pen">
                    {" "}
                    {""}
                    {bio}
                    <br />
                  </i>
                </ListGroup.Item>
              ) : (
                ""
              )}

              {location ? (
                <ListGroup.Item>
                  <i className="fas fa-map-marker-alt">
                    {" "}
                    {location} <br />
                  </i>
                </ListGroup.Item>
              ) : (
                ""
              )}
              <ListGroup.Item>
                {" "}
                <Badge variant="dark">Followers {followers}</Badge> {""}
                <Badge variant="light">Following {following}</Badge>
                <Badge variant="secondary">Public repos {public_repos}</Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <Repos repos={repos} />
              </ListGroup.Item>
            </ListGroup>

            <Button style={buttonStyle} href={html_url}>
              GitHub profile
            </Button>
          </Card.Body>
        </Card>
      </div>
      {/* <Repos repos={repos} /> */}
    </div>
  );
};

export default User;
