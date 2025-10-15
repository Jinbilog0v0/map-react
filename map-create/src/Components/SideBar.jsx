import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Cities", path: "/"},
    { name: "Favorites", path: "/favorites"},
    { name: "Atrractions", path: "/attractions"},
    { name: "About", path: "/about"},
  ];

  const baseStyle =
    "flex h-[40px] md:h-[50px] border border-[#009246] md:border-t-0 md:border-l-0 md:border-r-0 hover:bg-[#009246] hover:text-white hover:scale-100 transition duration-300 ease-in-out p-2 font-semibold items-center justify-center rounded-md md:rounded-none";
  const activeStyle = "bg-[#009246] text-white";

  return (
    <nav className="bg-white">
            <ul className="flex flex-row md:flex-col items-center justify-around md:justify-start w-full py-2 md:py-4 px-2 md:px-0 gap-1 md:gap-2">
              {menuItems.map((item, index) => (
               <li key={index} className="flex w-full max-w-[120px] md:max-w-full justify-center text-[#009246]"> 
                <NavLink
                  to={item.path}
                  className={({isActive}) =>
                    `${baseStyle} 
                    ${isActive || (location.pathname === "/" && item.path ==="/") ? activeStyle : "hover:bg-[#009246] hover:text-white"} 
                    text-sm md:text-base w-full transition-all duration-300`
                  }
                >
                  {item.name}
                </NavLink> 
               </li>
              ))}
            </ul>
    </nav>
  );
}

export default SideBar;
