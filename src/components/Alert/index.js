import React, { useEffect } from "react";
import "./styles.css";

const Alert = (props) => {
  const { isClosed, message, setAlertState, warning, error,  } = props;



  return (
    <div className="alert_container">
      <div className={` alert_div ${message.length > 0 ? "showAlert" : ""} ${warning ? "alert_div_warning" : ""} ${error ? "alert_div_error" : ""}`}  >
        <i className="fa-solid fa-circle-check check"></i>
        <span>{message}</span>
        {isClosed && (  <i onClick={() => setAlertState({ alertStatus: false, message: "", isClosed: false })} className="fa-solid fa-xmark close"   ></i>)}
        <div className="container">
          <div className="progress2 progress_moved">
            <div className="progress_bar2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
