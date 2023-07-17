import './Navbar.css'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="navbar">
      <div className="links">
          <ul>
              <li>
        <Link to="/pageone">To do list</Link>
        </li>
        <li>
        <Link to="/pagetwo">Players</Link>
        </li>
        <li>
        <Link to="/pagethree">Add a player</Link>
        </li>
        <li>
        <Link to="/pagefour">Favorite players</Link>
        </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
