import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const RepoItem = ({ repo }) => {
  const { name, html_url } = repo;
  const buttonStyle = {
    backgroundColor: "black",
    color: "#fff",
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <ListGroup>
      <ListGroup.Item>
        {name} {""}
        <Button style={buttonStyle} href={html_url}>
          See Repo
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default RepoItem;
