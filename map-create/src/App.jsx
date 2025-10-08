import "./style.css";
import { useState } from "react";
import Searchbar from "./Components/Searchbar";
import FilterBtn from "./Components/FilterBtn";
import cities from "./FilterData/Cities";
import Card from "./Components/Card";
import SideBar from "./Components/SideBar";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";

export default function App() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? cities : cities.filter((city) => city.category === filter);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="h-screen flex flex-col">
            {/* Header 1/2: Title */}
            <div className="sticky top-0 z-50 bg-green-700 p-4 shadow-md">
              <h1 className="text-3xl text-center mt-2.5 font-bold text-white">
                City Explorer Pro
              </h1>
              <div className="text-center">
                <h3 className="font-semibold mb-4 text-white">By TechWeave</h3>
              </div>
            </div>

            {/* Header 2/2: Searchbar */}
            <div className="sticky top-[96px] z-40 bg-white border-b-2 border-black">
              <Searchbar />
            </div>

            <div className="flex flex-1 bg-white overflow-hidden">

              <SideBar />

              <div className="flex-1 overflow-y-auto ml-0 md:ml-[20px] p-2 md:p-4">
                <FilterBtn filter={filter} setFilter={setFilter} />
                <Card cities={filteredItems} />
              </div>
            </div>
          </div>
        }
      />

      {/* Details page */}
      <Route path="/cities/:id" element={<Details />} />
    </Routes>
  );
}
