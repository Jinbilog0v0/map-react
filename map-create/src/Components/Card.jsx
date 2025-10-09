import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useState } from "react";

function Card({ cities }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex flex-col items-center mt-6">
      {/* Search Bar */}
      <div className="w-full max-w-4xl mb-8 px-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search cities by name or region..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[45px] pl-4 pr-10 border border-[#009246]/20 rounded-lg bg-white focus:outline-none focus:border-[#009246] transition-colors"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Cities Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full px-4">
      
      {/* No Results Message */}
      {filteredCities.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-600 text-lg">
            No cities found. Try adjusting your search.
          </p>
        </div>
      )}
        {filteredCities.map((city) => (
          <motion.li
            key={city.id}
            className="w-full max-w-[310px] mx-auto h-[250px] flex flex-col justify-end p-4 shadow-lg border border-[#009246]/20 bg-white rounded-xl hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <Link to={`/cities/${city.id}`}>
                <div className="w-full h-[180px] overflow-hidden rounded-t-xl shadow-3xl">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover pt-3"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold">{city.name}</h1>
                  <p>Region: {city.category}</p>
                </div>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  isFavorite(city.id) ? removeFromFavorites(city.id) : addToFavorites(city);
                }}
                className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    isFavorite(city.id) ? "text-[#009246]" : "text-gray-400"
                  }`}
                  fill={isFavorite(city.id) ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
