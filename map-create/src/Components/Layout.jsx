import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import Searchbar from "./Searchbar";

export default function Layout({ filter, setFilter, filteredItems }) {
  const location = useLocation();

  const hideSearchBar = location.pathname === "/about" || location.pathname === "/attractions";

  return (
    <div className="min-h-screen grid grid-rows-[auto_auto_1fr] bg-white overflow-y-auto">
      <header className="w-full bg-white px-4 py-4 sm:py-6 shadow-sm sticky top-0 z-50 border-b border-[#009246]/20">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold text-[#009246]">
          City Explorer Pro
        </h1>
        <div className="text-center">
          <h3 className="text-xs sm:text-sm md:text-base font-extralight mt-1 text-[#009246]/80">By Techweave</h3>
        </div>
      </header>

      <div className="grid md:grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
        <div className="md:row-span-2 border-b md:border-b-0 md:border-r border-[#009246]/20 sticky top-[73px] md:top-[89px] bg-white z-40">
          <SideBar />
        </div>

        <div className={`px-3 sm:px-4 py-2 sm:py-3 bg-white ${hideSearchBar ? 'hidden' : ''} sticky top-[125px] md:top-[89px] z-30`}>
          <div className="max-w-3xl mx-auto">
            <Searchbar />
          </div>
        </div>

        <div className="px-3 sm:px-4 py-2 sm:py-3">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
