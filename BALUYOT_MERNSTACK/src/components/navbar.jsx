import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/Students" className="nav-link">Students</Link>
          </li>
          <li>
            <Link to="/Students/add" className="nav-link">Add Student</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
