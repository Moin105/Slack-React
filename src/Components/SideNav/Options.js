import React from "react";

function Options({ name, Icon, charr }) {
  return (
    <div className="options">
      <div className="icon">
        {(Icon && <Icon className="side-icon" />) || <div>{charr}</div>}
      </div>
      <p className="name">{name}</p>
    </div>
  );
}

export default Options;
