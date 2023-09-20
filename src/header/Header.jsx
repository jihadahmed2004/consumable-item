import { Link,NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <>
        <nav className="">
            <ul className="flex justify-center">
                <Link to="/users"> Home </Link>
                <NavLink to="/users"> Meals</NavLink>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contacts</Link>
            </ul>
        </nav>
        </>
    );
};

export default Header;