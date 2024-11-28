import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={() => navigate(`/user/${user.id}`)}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {user.name}
        </h3>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <p className="text-gray-600 mb-2">{user.phone}</p>
        <p className="text-gray-600 mb-4">Company: {user.company.name}</p>
      </div>
      <div className="bg-gray-100 p-4 text-center">
        <a
          href={`mailto:${user.email}`}
          className="text-green-500 hover:text-green-700 font-semibold transition duration-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default UserCard;
