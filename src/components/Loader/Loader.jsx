import React, { Fragment } from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <Fragment>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Fragment>
  );
};

export default Loader;
