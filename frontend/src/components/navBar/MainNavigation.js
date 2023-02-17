import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Events Application</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default MainNavigation;
