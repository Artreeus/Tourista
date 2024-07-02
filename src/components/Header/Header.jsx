import { NavLink, Link } from "react-router-dom";
import "../App.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/All_tourist_spot"> All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/Add_Tourist">Add Tourist Spot</NavLink>
      </li>
      <li>
        <NavLink to="/my_list"> My List</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 rounded-3xl ">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="font-bold btn-ghost normal-case lg:text-3xl text-xl"
        >
          Touri<span className="text-[#23BE0A]">sta</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="flex gap-4 items-center">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                alt="Image"
                src={user?.photoURL}
                className="w-12 rounded-full"
              />
            </div>
            <button
              onClick={handleSignOut}
              className="btn bg-[#41db56] rounded-3xl"
            >
              Log Out
            </button>
            <div className={darkMode ? "dark" : ""}>
              <label className="toggle-label">
                <input
                  type="checkbox"
                  className="toggle visually-hidden"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <span className="toggle-button" />
              </label>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center">
            <div className="flex gap-4">
              
              <Link to="/register" className="l-btn">
                Register
              </Link>
              <Link to="/login" className="r-btn">
                Login
              </Link>
            </div>
            <div className={darkMode ? "dark" : ""}>
              <label className="toggle-label">
                <input
                  type="checkbox"
                  className="toggle visually-hidden"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <span className="toggle-button" />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
