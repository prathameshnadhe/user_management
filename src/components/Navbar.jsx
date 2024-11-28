import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          User Management
        </Link>
        <Link
          to="/add-user"
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded"
        >
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
