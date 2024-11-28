import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

// Create and configure the Redux store
const store = configureStore({
  reducer: {
    users: usersReducer, // Add users slice to the store
  },
});

export default store;
