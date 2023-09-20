import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <nav>
            <ul className="flex">
                <Link to="/"> Home </Link>
                <Link to="/users"> Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    );
};

export default Header;