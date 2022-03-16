import React from "react";
import "./styles/Header.css";

function HeaderButton({ Icon }) {
  const mystyle = {
    display: "flex",
    color: "white",
    alignItems: "center",
    borderRadius: "4px",
    backgroundColor: "black",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // fontFamily: "Arial",
  };

  return (
    <div className="btn">
      {" "}
      {Icon !== "" ? (
        Icon && <Icon className="header-icon" color="white" />
      ) : (
        <div style={mystyle}>w</div>
      )}{" "}
    </div>
  );
}

export default HeaderButton;
