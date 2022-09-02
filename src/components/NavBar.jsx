import { Link } from "react-router-dom";
import '../sass/style.scss'

function NavBar() {
  return (
    <div className="navContainer">
        <Link className="linkStyle" to="/" >Home</Link>
        <Link className="linkStyle" to="/Create" >Create</Link>
    </div>
  );
}

export default NavBar;
