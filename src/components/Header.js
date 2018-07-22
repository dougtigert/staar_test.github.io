import React from 'react';
import { NavLink } from "react-router-dom";

const Header = (props) => (
  <div className="header">
    <div className="container header__inner">
      <h1 className="header__title">{props.title}</h1>
      <header className="header__links">
        <NavLink to="/help" className="normal" activeClassName="is-active" exact={true}>Help</NavLink>
      </header>
    </div>
  </div>
);

export default Header