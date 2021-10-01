import React from "react";
import "./Breadcrumbs.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as TriangleIcon } from "../../assets/icons/triangle.svg";

const Breadcrumbs = ({ crumbs }) => (
  <ul className="breadcrumbs">
    {crumbs.map((crumb, idx) => (
      <li key={idx} style={{ marginRight: "8px" }}>
        <NavLink to={crumb.link} className="breadcrumbs__link">
          {crumb.text}
        </NavLink>
        {idx !== crumbs.length - 1 && (
          <TriangleIcon className="breadcrumbs__triangle-icon" />
        )}
      </li>
    ))}
  </ul>
);
export default Breadcrumbs;
