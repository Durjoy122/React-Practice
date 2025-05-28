import { NavLink, Outlet } from "react-router-dom";

import './App.css';

export default function College() {
  return (
    <div>
      <h1>College</h1>
      <nav className="nested-routes">
         <NavLink to="student">Student</NavLink>
         <NavLink to="departments">Departments</NavLink>
         <NavLink to="details">Details</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}