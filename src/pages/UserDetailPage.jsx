import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.users.users.find((u) => u.id === parseInt(id))
  );

  if (!user) {
    return <p className="text-center text-red-500">User not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <button
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src={`https://i.pravatar.cc/150?img=${(user.id % 9) + 1}`}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
        {user?.website && (
          <p className="text-gray-600">
            Website:{" "}
            <a
              href={`https://${user?.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user?.website}
            </a>
          </p>
        )}

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">Address</h2>
          <p className="text-gray-600">
            {user?.address
              ? `${user?.address?.suite}, ${user?.address?.street}, ${user?.address?.city}`
              : "Address details are unavailable"}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">Company</h2>
          <p className="text-gray-600">Name: {user?.company.name}</p>
          {user?.company?.catchPhrase && (
            <p className="text-gray-600">
              Catchphrase: {user?.company?.catchPhrase}
            </p>
          )}
          {user?.company?.bs && (
            <p className="text-gray-600">BS: {user?.company?.bs}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
