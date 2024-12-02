import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Dashboard />
          </main>
          <Footer />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
