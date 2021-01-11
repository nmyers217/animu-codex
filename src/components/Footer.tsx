import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-200 dark:bg-gray-900 body-font">
      <div className="bg-gray-300 dark:bg-gray-800 bg-opacity-75">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
            © {new Date().getFullYear()} AnimuCodex —
            <span className="text-gray-500 ml-1">Nicholas Myers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
