import React from "react";
import { Link } from "react-router-dom";
import PageTwo from "../pages/pageTwo";
import PageOne from "../pages/pageOne";

const Header = () => {
  return (
    <>
      <div className="flex gap-16">
        <Link to="/">Page One</Link>
        <Link to="/two">Page Two</Link>
      </div>
    </>
  );
};

export default Header;
