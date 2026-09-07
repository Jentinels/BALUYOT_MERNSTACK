import Students from '../pages/Students';
import Home from '../pages/Home';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Routes>
    <nav>
        <div className="container mx-auto">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="hover:text-grey-300">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/Students" className="hover:text-grey-300">
                    Students
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </Routes>
  );
}