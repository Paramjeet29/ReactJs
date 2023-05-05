import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
           <h1>Welcome to movie site</h1>
           <div className="links">
                <Link to="/">Home</Link>
            </div>
        </div>
     );
}
 
export default Navbar;