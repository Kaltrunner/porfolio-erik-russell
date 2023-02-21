import React, { Link } from "react-router-dom";

function MenuHeader() {
  return (
    <div className="menu-header-div-body">
      <Link to="/">
        <button className="menu-header-button">X</button>
      </Link>
    </div>
  );
}

export default MenuHeader;
