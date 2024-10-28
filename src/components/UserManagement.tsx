import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/appStore";
import { addUser, updateUserRole } from "../store/userSlice";
import Navbar from "./Navbar";
import UserModal from "../utils/UserModal";

const UserManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (username: string, role: "admin" | "user") => {
    dispatch(addUser({ username, role }));
    setIsModalOpen(false);
  };

  const handleRoleChange = (username: string, role: "admin" | "user") => {
    dispatch(updateUserRole({ username, role }));
  };

  return (
    <>
      <Navbar role={"admin"} />
      <div className="w-8/12 m-12 mx-auto">
        <div className="flex justify-between items-center mb-6 ">
          <h1 className="text-2xl font-bold">User Management</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add New User
          </button>
        </div>

        <table className=" w-6/12 mx-auto">
          <thead>
            <tr className="bg-gray-200 ">
              <th className=" px-4 py-2 text-center">Username</th>
              <th className=" px-4 py-2 text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.username} className="hover:bg-gray-100">
                <td className="px-4 py-2 text-center">{user.username}</td>
                <td className="px-4 py-2 text-center ">
                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(
                        user.username,
                        e.target.value as "admin" | "user"
                      )
                    }
                    className="rounded px-2 py-1 hover:bg-gray-100"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddUser={handleAddUser}
        />
      </div>
    </>
  );
};

export default UserManagement;
