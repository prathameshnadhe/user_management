import React, { useState } from "react";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (username: string, role: "admin" | "user") => void;
}

const UserModal = ({ isOpen, onClose, onAddUser }: UserModalProps) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"admin" | "user">("user");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser(username, role);
    setUsername("");
    setRole("user");
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl mb-4 text-center">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "admin" | "user")}
              className="w-full border rounded px-2 py-1"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add User
            </button>
            <button
              onClick={onClose}
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
