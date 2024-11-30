import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const addUserToServer = createAsyncThunk(
  "users/addUserToServer",
  async (newUser) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newUser
    );
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    searchQuery: "",
    loading: false,
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;

        const fetchedUsers = action.payload;
        const existingUserIds = state.users.map((user) => user.id);
        const newUsers = fetchedUsers.filter(
          (user) => !existingUserIds.includes(user.id)
        );

        state.users = [...state.users, ...newUsers];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addUserToServer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUserToServer.fulfilled, (state, action) => {
        state.loading = false;
        console.log("User added to server:", action.payload);
        state.users.push(action.payload);
      })
      .addCase(addUserToServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, addUser } = usersSlice.actions;

export default usersSlice.reducer;
