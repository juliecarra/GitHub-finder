import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
class UserItem extends Component {
  static defaultProps = {
    buttonText: "See More"
  };
  render() {
    const { login, avatar_url } = this.props.user;
    const { buttonText } = this.props;

    const cardStyle = {
      width: "18rem",
      marginTop: "50px"
    };

    const buttonStyle = {
      backgroundColor: "black"
    };

    return (
      <Card style={cardStyle}>
        <Card.Img variant="top" src={avatar_url} />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Button style={buttonStyle}>
            <Link to={`/user/${login}`}>
              <div style={{ color: "#fff" }}>{buttonText}</div>
            </Link>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default UserItem;
