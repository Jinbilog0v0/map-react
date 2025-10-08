import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Cities", path: "/" },
    { name: "Favorites", path: "/favorites" },
    { name: "Theme", path: "/theme" },
    { name: "Attractions", path: "/attractions" },
    { name: "About", path: "/about" },
  ];

  const baseStyle =
    "flex w-[200px] h-[50px] border border-black border-t-0 border-l-0 border-r-0 hover:bg-green-900 hover:text-white transition duration-300 ease-in-out p-2 text-lg font-semibold items-center justify-center";
  const activeStyle = "bg-green-700 text-white";

  return (
    <>
      <button
        className="fixed top-[30px] left-4 z-50 p-2 bg-green-700 text-white rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-white border-r-2 border-r-black transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:w-[250px]`}
      >
        <ul className="flex flex-col justify-center items-center mt-16 md:mt-8">
          {menuItems.map((item, index) => (
            <li key={index} className="flex w-full justify-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${baseStyle} ${
                    isActive ||
                    (location.pathname === "/" && item.path === "/")
                      ? activeStyle
                      : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="text-center p-15 text-sm text-gray-600 border-t border-gray-300">
          All Rights Reserved © TechWeave 2025
        </div>
      </div>
    </>
  );
}

export default SideBar;
