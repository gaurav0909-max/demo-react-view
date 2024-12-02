import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';


const Header = () => {
  const { toggleTheme } = useTheme();
  const { user, logout } = useUser();

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 p-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Animated Banner */}
        <h1 className="text-3xl font-bold animate-fadeIn">
          Welcome to the Modern Dashboard
        </h1>

        {/* User Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="font-semibold">{user.name}</span>
          </div>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-white text-indigo-700 rounded hover:bg-indigo-100"
          >
            Toggle Theme
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
