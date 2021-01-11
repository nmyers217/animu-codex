import React from 'react';

interface ScrollToTopProps {
  topRef: any;
}

function ScrollToTop({ topRef }: ScrollToTopProps) {
  return (
    <div
      onClick={() => topRef.current.scrollIntoView({ behavior: 'smooth' })}
      className="fixed bottom-4 right-4 w-12 h-12 p-2 text-white bg-indigo-500 rounded-full cursor-pointer hover:bg-purple-800 shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </div>
  );
}

export default ScrollToTop;
