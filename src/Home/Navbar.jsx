import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, userData } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container">
      <div className="navbar flex justify-between bg-[#404040] items-center py-4 px-6">
      <a href="/" className="btn btn-ghost normal-case text-xl text-white sm:font-l sm:text-l">
  Music School
</a>


        <div className="hidden sm:block">
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-red-500"
            >
              Home
            </Link>
            <Link
              to="/instructors"
              className="text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-red-500"
            >
              Instructors
            </Link>
            <Link
              to="/classes"
              className="text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-red-500"
            >
              Classes
            </Link>
            <Link
              to="/dashboard"
              className="text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-red-500"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {!user ? (
            <Link
              to="/login"
              className="text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-red-500"
            >
              Login
            </Link>
          ) : null}

          {user && (
            <p className="text-white me-4 ms-4">
              Hi! {user.displayName || userData.displayName}
            </p>
          )}

          {user && (
            <Link to="/profile">
              <img
                className="rounded-full h-10 w-10 me-4"
                src={user.photoURL || userData.photoURL}
                alt=""
              />
            </Link>
          )}

          {user && (
            <Link
              to=""
              onClick={logOut}
              className="text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-red-500"
            >
              Log Out
            </Link>
          )}

          <div className="sm:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="block sm:hidden bg-[#404040] py-2 px-4">
          <Link
            to="/"
            className="block text-white px-2 py-1 rounded-md transition-colors duration-200 hover:bg-red-500"
          >
            Home
          </Link>
          <Link
            to="/instructors"
            className="block text-white px-2 py-1 rounded-md transition-colors duration-200 hover:bg-red-500"
          >
            Instructors
          </Link>
          <Link
            to="/classes"
            className="block text-white px-2 py-1 rounded-md transition-colors duration-200 hover:bg-red-500"
          >
            Classes
          </Link>
          <Link
            to="/dashboard"
            className="block text-white px-2 py-1 rounded-md transition-colors duration-200 hover:bg-red-500"
          >
            Dashboard
          </Link>
          {!user ? (
            <Link
              to="/login"
              className="block text-white px-2 py-1 rounded-md transition-colors duration-200 hover:bg-red-500"
            >
              Login
            </Link>
          ) : null}
          {user && (
            <p className="block text-white px-2 py-1">
              Hi! {user.displayName || userData.displayName}
            </p>
          )}
          {user && (
            <Link to="/profile">
              <img
                className="rounded-full h-10 w-10 mx-auto my-2"
                src={user.photoURL || userData.photoURL}
                alt=""
              />
            </Link>
          )}
          {user && (
            <Link
              to=""
              onClick={logOut}
              className="block text-white px-2 py-1 rounded-md transition-colors duration-200 hover:bg-red-500"
            >
              Log Out
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
