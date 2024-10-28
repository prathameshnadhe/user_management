import { Link } from "react-router-dom";

interface NavbarProps {
  role: "admin" | "user";
}

const Navbar = ({ role }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white px-4 py-3">
      <div className="flex items-center">
        {role === "admin" ? (
          <span className="text-xl font-semibold">Admin Dashboard</span>
        ) : (
          <span className="text-xl font-semibold">User Dashboard</span>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {role === "admin" ? (
          <>
            <Link to="/admin-dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
            <Link to="/user-management" className="hover:text-blue-400">
              User Management
            </Link>
          </>
        ) : (
          <>
            <Link to="/user-dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
            <Link to="/invoices" className="hover:text-blue-400">
              Invoices
            </Link>
          </>
        )}
        <Link to="/" className="hover:text-blue-400">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
