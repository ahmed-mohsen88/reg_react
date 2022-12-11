import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark container">
      <div className="nav navbar-nav">
        <a className="nav-item nav-link active" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#">
          Home
        </a>
      </div>
    </nav>
  );
}

export default Header;
