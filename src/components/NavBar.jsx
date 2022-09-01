import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <Link to="/" >Home</Link>
        <Link to="/Create" >Create</Link>
    </div>
  );
}

export default NavBar;
