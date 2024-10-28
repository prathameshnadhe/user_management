import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface UserContextType {
  username: string;
  setUsername: (name: string) => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create the provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
