import { useFavorites } from "../context/FavoritesContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#009246] mb-4">No Favorites Yet</h2>
          <p className="text-gray-600 mb-6">Start exploring cities and add them to your favorites!</p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-[#009246] text-white rounded-lg hover:bg-[#009246]/90 transition duration-300"
          >
            Explore Cities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#009246] mb-6 text-center">My Favorite Cities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {favorites.map((city) => (
          <motion.div
            key={city.id}
            className="relative bg-white rounded-xl shadow-md overflow-hidden border border-[#009246]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link to={`/cities/${city.id}`}>
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-[#009246]">{city.name}</h3>
                <p className="text-gray-600">Region: {city.category}</p>
              </div>
            </Link>
            <button
              onClick={() => removeFromFavorites(city.id)}
              className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#009246]"
                fill="currentColor"
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;