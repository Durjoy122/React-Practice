import { NavLink, Outlet ,Link } from "react-router-dom";

import './App.css';

export default function UserList() {
  const userData = [
      {id: 1 , name : 'Durjoy'},
      {id: 2 , name : 'Alice'},
      {id: 3 , name : 'Nipun'},
      {id: 4 , name : 'Moy'},
      {id: 5 , name : 'Niloy'},
  ]
  return (
    <div>
       <h1>User List</h1>
       {
           userData.map((item) => (
                <div>
                    <h4> 
                        <Link to={"/users/" + item.id}>{item.name}</Link>
                    </h4>
                </div>
           ))
       }
    </div>
  );
}