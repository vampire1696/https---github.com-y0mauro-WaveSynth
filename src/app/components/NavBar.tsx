import React, { Fragment } from "react";
import SoundWaveIcon from "./SoundWaveIcon";
import Link from "next/link";

const Links = [
    { label: "About", route: "/about" },
    { label: "Contact", route: "/contact" },
    { label: (
      <Fragment>
        Studio  <SoundWaveIcon  color="orange" size={30}/>
      </Fragment>
    ),
    route: "/studio" },
  ];

const NavBar: React.FC = () => {
  return (
    <nav className=" bg-purple-900 py-4">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-5">
          <div className="flex items-center">
            <div className="flex-shrink-0  cursor-pointer">
              
              <Link href={"/"}>
              <SoundWaveIcon />
              </Link>
              
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {Links.map(({ label, route }, index) => (
                  <Link
                    className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex "
             
                    href={route}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
