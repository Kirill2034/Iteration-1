import React from "react";
import "./Breadcrumbs.scss";
import { NavLink } from "react-router-dom";

const Breadcrumbs = ({ crumbs }) => (
  <ul className="breadcrumbs">
    {crumbs.map((crumb, idx) => (
      <li key={idx}>
        <NavLink to={crumb.link} className="breadcrumbs__link">
          {crumb.text}
        </NavLink>
      </li>
    ))}
  </ul>
);
export default Breadcrumbs;
