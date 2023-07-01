import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-purple-900 py-4  mt-auto left-0   h-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Wave Synth. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A1.75 1.75 0 013.75 3h16.5a1.75 1.75 0 011.75 1.75v16.5a1.75 1.75 0 01-1.75 1.75H3.75A1.75 1.75 0 012 21.25V4.75zM4.5 8.5v7h4.75v-7H4.5zm6.5 0v7h4.75v-7h-4.75zm6.5 0v7h1.75a.25.25 0 00.25-.25v-6.5h-2zm1-6.5h-14V9.75a.25.25 0 01-.25.25H3.75A.75.75 0 003 10.75v5.5a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75v-5.5a.75.75 0 00-.75-.75H19.5V2.25a.75.75 0 00-.75-.75H4.25a.75.75 0 00-.75.75v1.75h14a.25.25 0 01.25.25v1.75z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 ml-4">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M7.023 2a5.978 5.978 0 015.954 6.736l-.527 3.912a1 1 0 001.775.869l2.387-2.388a6.002 6.002 0 11-11.368-3.3l-.5 3.71a1 1 0 001.312 1.114l3.914-.915A5.974 5.974 0 017.022 2zm0 2a4 4 0 00-3.995 3.8l-.005.2v.806a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 011-1h1a1 1 0 011 1v1a3 3 0 01-2.824 2.995L6.6 13H5.4a3 3 0 01-2.995-2.824L2.4 10.8v-1.6A4 4 0 007.023 4zm-3 6a1 1 0 100 2 1 1 0 000-2zm6.5-8.5a1 1 0 110 2 1 1 0 010-2zm5.5 2a1 1 0 110 2 1 1 0 010-2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 ml-4">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.7 9h-1.5a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h1.5a.6.6 0 01.6.6v.8a.6.6 0 01-.6.6zM18 9.25a3.75 3.75 0 00-3.75-3.75h-1.5A3.75 3.75 0 009 9.25v1.5A3.75 3.75 0 0012.75 14h1.5A3.75 3.75 0 0018 10.75v-1.5zM10.5 5.5h1.5A1.75 1.75 0 0014.75 7.25v1.5A1.75 1.75 0 0013 10.5h-1.5A1.75 1.75 0 0010.25 8.75v-1.5A1.75 1.75 0 0012 5.5zm7.7 9h-1.5a.6.6 0 01-.6-.6v-.8a.6.6 0 01.6-.6h1.5a.6.6 0 01.6.6v.8a.6.6 0 01-.6.6zM10.5 18.5h1.5A1.75 1.75 0 0014.75 20v1.5a1.75 1.75 0 01-1.75 1.75h-1.5A1.75 1.75 0 0010.25 21.5v-1.5A1.75 1.75 0 0112 18.5zm7.7 0h-1.5a.6.6 0 01-.6-.6v-.8a.6.6 0 01.6-.6h1.5a.6.6 0 01.6.6v.8a.6.6 0 01-.6.6z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
