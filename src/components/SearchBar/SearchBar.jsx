import React, { useState, useContext } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";
import GitHubContext from "../../context/GitHub/GitHubContext";
import AlertContext from "../../context/Alert/AlertContext";

const SearchBar = () => {
  const githubContext = useContext(GitHubContext);
  const alertContext = useContext(AlertContext);

  const { searchUser, clearUsers } = githubContext;
  const { setAlert } = alertContext;

  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    if (query === "") {
      setAlert("Please enter a username");
    } else {
      e.preventDefault();
      searchUser(query); //In App.jsx searchUser is pass down as props
      setQuery("");
    }
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "#fff",
    width: "100%"
  };

  const textStyle = {
    backgroundColor: "black",
    color: "#fff"
  };
  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            {" "}
            <InputGroup.Text id="basic-addon1" style={textStyle}>
              @
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            name="query"
            value={query}
            placeholder="Search User"
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button style={buttonStyle} onClick={handleSubmit}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      {githubContext.users.length > 0 && (
        <Button style={buttonStyle} onClick={clearUsers}>
          Clear
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
