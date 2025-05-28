import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>My Website</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/college">College</Link>
        </li>
        <li>
          <Link to="/users">User</Link>
        </li>
      </ul>
    </nav>
  );
}