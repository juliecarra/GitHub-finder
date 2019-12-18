import React, { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import "./Alert.css";
import AlertContext from "../../context/Alert/AlertContext";

const AlertMessage = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className="Alert">
        <Alert variant="danger">
          <i className="fas fa-exclamation-triangle" /> {alert.message}
        </Alert>
      </div>
    )
  );
};

export default AlertMessage;
