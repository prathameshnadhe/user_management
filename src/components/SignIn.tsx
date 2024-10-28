import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../store/userSlice";
import { fetchAdminData } from "../api/userApi";
import { RootState, AppDispatch } from "../store/appStore";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import logo from "../utils/images/logo.jpg";

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState("");
  const [role, setRole] = useState<"admin" | "user" | "">("");
  const { setUsername } = useUserContext();

  // Correctly select the users from the Redux state
  const users = useSelector((state: RootState) => state.user.users);

  const handleSignIn = async () => {
    if (!role) {
      alert("Please select a role.");
      return;
    }

    try {
      // Check if inputUsername exists in the Redux store first
      const matchedUser = users.find((user) => user.username === inputUsername);
      console.log(matchedUser);
      if (matchedUser && role === "user") {
        // If user is found in Redux store and role is "user", set username and navigate
        setUsername(matchedUser.username);
        navigate("/user-dashboard");
        return;
      } else if (matchedUser && role === "admin") {
        setUsername(matchedUser.username);
        navigate("/admin-dashboard");
      }

      // If user is not found in Redux store, fetch data from API
      const data = await fetchAdminData();
      const isAdmin = role === "admin" && data.role === "admin";
      const isUser = role === "user" && data.role === "user";

      if (isAdmin) {
        // Set username from admin data and navigate to admin dashboard
        setUsername(data.username);
        dispatch(setUsers([data])); // Optionally update Redux store if admin is logged in
        navigate("/admin-dashboard");
      } else if (isUser) {
        // Set username from fetched data and navigate to user dashboard
        setUsername(data.username);
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2  flex items-center justify-center">
        <img src={logo} alt="Organization Logo" className="w-3/4 h-auto " />
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
        <div className="w-full max-w-md">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="inputUsername"
          >
            Username
          </label>
          <input
            type="text"
            id="inputUsername"
            placeholder="Enter your inputUsername"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <select
            id="role"
            className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:border-blue-500"
            value={role}
            onChange={(e) => setRole(e.target.value as "admin" | "user")}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button
            onClick={handleSignIn}
            className="w-full bg-blue-600 text-white py-2 rounded-lg mb-4 hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
