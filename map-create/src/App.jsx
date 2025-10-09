import "./style.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/layout";
import FilterBtn from "./Components/FilterBtn";
import Card from "./Components/Card";
import cities from "./FilterData/Cities";
import Details from "./Components/Details";
import About from "./Components/About";
import Favorites from "./Components/Favorites";
import Attractions from "./Components/Attractions";
import { FavoritesProvider } from "./context/FavoritesContext";


export default function App() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? cities : cities.filter((city) => city.category === filter);

  return (
    <FavoritesProvider>
      <Routes>
        <Route element={<Layout filter={filter} setFilter={setFilter} filteredItems={filteredItems} />}>
          <Route
            path="/"
            element={
              <>
                <FilterBtn filter={filter} setFilter={setFilter} />
                <Card cities={filteredItems} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/theme" element={<h2>Theme Page</h2>} />
          <Route path="/attractions" element={<Attractions />} />
        </Route>

        {/* Details page */}
        <Route path="/cities/:id" element={<Details />} />
      </Routes>
    </FavoritesProvider>
  );
}
