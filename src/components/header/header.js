import React from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.children}
      <div class="arrow-down" />
      <div class="arrow-left" />
      <div class="arrow-right" />
    </header>
  );
};

export default Header;
