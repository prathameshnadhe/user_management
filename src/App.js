import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserListPage from './pages/UserListPage';
import UserDetailPage from './pages/UserDetailPage';
import AddUserPage from './pages/AddUserPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto py-4 w-8/12">
          <Routes>
            <Route path="/" element={<UserListPage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
            <Route path="/add-user" element={<AddUserPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
