import React from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.children}
      <nav>
        Navigation
        <ul>
          <li> one </li>
          <li> two </li>
          <li> three </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
