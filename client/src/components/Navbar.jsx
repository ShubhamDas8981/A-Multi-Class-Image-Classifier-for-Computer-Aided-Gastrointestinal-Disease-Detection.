
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-teal-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold">MediLens</h1>
      {/* <button
        onClick={() => alert('Logged out')}
        className="text-xs sm:text-sm bg-white text-teal-600 py-1 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-gray-200 transition-all ml-auto"
      >
        Logout
      </button> */}
    </header>
  );
};

export default Navbar;
