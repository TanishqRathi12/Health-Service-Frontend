import React from 'react'

function Navbar() {
  return (
    <div className="bg-gray-800 ">
  <div className="mx-auto flex max-w-10xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <span>
        <svg
          width="30"
          height="50"
          viewBox="0 0 50 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>
      </span>
      <span className="font-bold text-white">Health-Services</span>
    </div>
    <div className="hidden grow items-start lg:flex">
      <ul className="ml-12 inline-flex space-x-8">
        <li>
          <a
            href="https://www.instagram.com/rathitanishq/"
            className="rounded-md bg-transparent px-3 py-2 inline-flex items-center text-sm font-semibold text-white hover:bg-gray-700"
          >
            Home
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokewidth="2"
                strokelinecap="round"
                strokelinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rathitanishq/"
            className="rounded-md bg-transparent px-3 py-2 inline-flex items-center text-sm font-semibold text-white hover:bg-gray-700"
          >
            About
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokewidth="2"
                strokelinecap="round"
                strokelinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rathitanishq/"
            className="rounded-md bg-transparent px-3 py-2 inline-flex items-center text-sm font-semibold text-white hover:bg-gray-700 "
          >
            Contact
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokewidth="2"
                strokelinecap="round"
                strokelinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div className="hidden space-x-2 lg:block">
      <button
        type="button"
        className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Sign up
      </button>
      <button
        type="button"
        className="rounded-md border border-white px-3 py-2 text-white font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Log In
      </button>
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokewidth="2"
        strokelinecap="round"
        strokelinejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>
  )
}

export default Navbar
