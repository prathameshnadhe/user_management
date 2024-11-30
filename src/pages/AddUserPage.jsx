import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/usersSlice";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, company } = formData;

    // Validate all fields
    if (!name || !email || !phone || !company) {
      setError("All fields are required.");
      return;
    }

    // Dispatch the new user to the Redux store
    dispatch(
      addUser({
        id: Date.now(), // Temporary unique ID
        name,
        email,
        phone,
        company: { name: company },
      })
    );

    // Navigate to the home page after submission
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 mt-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Add New User
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          {/* Company Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-center font-medium mb-4">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserPage;
