import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  role: "admin" | "user";
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUserRole: (
      state,
      action: PayloadAction<{ username: string; role: "admin" | "user" }>
    ) => {
      const user = state.users.find(
        (user) => user.username === action.payload.username
      );
      if (user) {
        user.role = action.payload.role;
      }
    },
  },
});

export const { setUsers, addUser, updateUserRole } = userSlice.actions;
export default userSlice.reducer;
