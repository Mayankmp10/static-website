import Logo from "./Logo";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
      <div className="container-nb">
        <div className="logo"><Logo/></div>
        <div className="categories">
            <button className="buttn">Home</button>
            <button className="buttn">About</button>
            <button className="buttn">Shop</button>
            <button className="buttn">Contact</button>
        </div>
        <div className="user">
            <div className="search"><FaSearch /></div>
            <div className="cart"><FaCartArrowDown /></div>
            <div className="profile"><FaUser /></div>
        </div>

      </div>
    </>
  );
};

export default Navbar;