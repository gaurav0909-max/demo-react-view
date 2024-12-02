import React from 'react';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { user } = useUser();

  const cards = [
    { title: 'Profile', description: 'View and edit your profile information.' },
    { title: 'Settings', description: 'Manage your account settings.' },
    { title: 'Analytics', description: 'View usage and performance analytics.' },
    { title: 'Support', description: 'Get help and support for your account.' },
  ];

  return (
    <section className="container mx-auto p-8">
      {/* Personalized Greeting */}
      <h2 className="text-2xl font-bold mb-6 animate-fadeIn">
        Welcome, {user.name || 'Guest'}!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {card.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
