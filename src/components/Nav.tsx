import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// @ts-ignore
import DarkModeToggle from 'react-dark-mode-toggle';

import useDarkMode from 'use-dark-mode';

interface NavProps {
  showBack?: boolean;
}

function Nav({ showBack }: NavProps) {
  const history = useHistory();
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
  });

  return (
    <nav className="bg-gray-800 dark:bg-indigo-900 min-w-full fixed z-50 shadow-lg">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-row items-center justify-between">
          {/* Left Side */}
          <div className="flex-none">
            <div
              className={`${
                showBack ? 'block' : 'invisible'
              } ml-4 w-12 h-12 p-2 cursor-pointer`}
              onClick={() => history.goBack()}
            >
              <svg
                className="fill-current stroke-current text-white hover:text-purple-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
          </div>

          {/* Centered Logo & Title */}
          <div className="flex-none">
            <NavLink to="/">
              <div className="group flex flex-row flex-none justify-center items-center cursor-pointer">
                {/* Logo */}
                <div className="w-16 h-16 p-2">
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 154 204"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="7"
                      y="7"
                      width="140"
                      height="190"
                      rx="10"
                      fill="#EE3E37"
                    />
                    <path
                      d="M149.954 182H134V200C147.827 199.1 150.397 187.625 149.954 182Z"
                      fill="#A62B26"
                    />
                    <path d="M147 35H134V49H147V35Z" fill="#A62B26" />
                    <path
                      d="M4 64H91L118 36.5H130"
                      stroke="#F37873"
                      strokeWidth="7"
                    />
                    <path
                      d="M7 60.5H90L117 33H150"
                      stroke="#4D1717"
                      strokeWidth="7"
                    />
                    <path
                      d="M133 181.5H147.5"
                      stroke="#4D1717"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M133 173H147.5"
                      stroke="#4D1717"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M133 56.5H147.5"
                      stroke="#4D1717"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M133 48H147.5"
                      stroke="#4D1717"
                      strokeWidth="3.5"
                    />
                    <circle
                      opacity="0.5"
                      cx="33"
                      cy="31"
                      r="12.75"
                      fill="white"
                      stroke="#4D1717"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="33"
                      cy="31"
                      r="9.5"
                      fill="#5FC7FB"
                      stroke="#17264D"
                    />
                    <circle cx="31" cy="30" r="3" fill="#AFE3FD" />
                    <circle
                      cx="136"
                      cy="18"
                      r="4"
                      fill="#77A946"
                      stroke="#4D1717"
                      strokeWidth="2"
                    />
                    <circle
                      cx="123"
                      cy="18"
                      r="4"
                      fill="#F5A623"
                      stroke="#4D1717"
                      strokeWidth="2"
                    />
                    <circle
                      cx="110"
                      cy="18"
                      r="4"
                      fill="#CB0000"
                      stroke="#4D1717"
                      strokeWidth="2"
                    />
                    <path
                      d="M34.6363 126.785C36.6531 125.282 36.6471 122.259 34.6242 120.763L25.7024 114.168C23.2243 112.336 19.7171 114.11 19.7233 117.191L19.7499 130.417C19.7561 133.499 23.2703 135.258 25.7411 133.416L34.6363 126.785Z"
                      fill="#FEC356"
                      stroke="#4D1717"
                      strokeWidth="3.5"
                    />
                    <rect
                      x="43.25"
                      y="169.25"
                      width="53.5"
                      height="6.5"
                      rx="3.25"
                      fill="#B22E29"
                      stroke="#4D1717"
                      strokeWidth="3.5"
                    />
                    <rect
                      x="3.5"
                      y="3.5"
                      width="147"
                      height="197"
                      rx="13.5"
                      stroke="#4D1717"
                      strokeWidth="7"
                    />
                    <path d="M131 33V200" stroke="#4D1717" strokeWidth="7" />
                  </svg>
                </div>

                {/* Title */}
                <div>
                  <span className="text-gray-50 group-hover:text-purple-200 text-2xl">
                    Animu Codex
                  </span>
                </div>
              </div>
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex flex-none p-2 items-center justify-end">
            <DarkModeToggle
              onChange={darkMode.toggle}
              checked={darkMode.value}
              size={60}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
