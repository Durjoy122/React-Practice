import { Link, Outlet, useParams } from "react-router-dom";

import './App.css';

export default function UserDetails() {
  const paramsData = useParams();
  return (
    <div>
       <h1> User Details page </h1>
       <h2> User Id is : {paramsData.id}</h2>
       <h3><Link to ="/users"> Back </Link></h3>
    </div>
  );
}