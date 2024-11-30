import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setSearchQuery } from "../redux/usersSlice";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";

const UserListPage = () => {
  const dispatch = useDispatch();
  const { users, searchQuery, loading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <SearchBar onSearch={(query) => dispatch(setSearchQuery(query))} />
      {filteredUsers.length === 0 ? (
        <p className="text-center text-2xl mt-6 text-gray-500">
          User not found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserListPage;
