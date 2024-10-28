import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import UserManagement from "./components/UserManagement";
import Invoices from "./components/Invoices";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/invoices" element={<Invoices />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
