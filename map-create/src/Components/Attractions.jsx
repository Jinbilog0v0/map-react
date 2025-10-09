
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cities from '../FilterData/Cities';

function Attractions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  // Collect all attractions from all cities
  const allAttractions = cities.flatMap(city => 
    (city.attractions || []).map(attraction => ({
      ...attraction,
      cityName: city.name,
      region: city.category,
      description: attraction.description || `A popular attraction in ${city.name}`,
      visitingHours: attraction.visitingHours || 'Contact location for hours'
    }))
  );

  // Filter and sort attractions
  const filteredAttractions = allAttractions
    .filter(attraction => {
      const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           attraction.cityName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === 'all' || attraction.region === selectedRegion;
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'city':
          return a.cityName.localeCompare(b.cityName);
        case 'region':
          return a.region.localeCompare(b.region);
        default:
          return 0;
      }
    });

  const handleAttractionClick = (attraction) => {
    setSelectedAttraction(attraction);
  };

  const closeModal = () => {
    setSelectedAttraction(null);
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-center text-[#009246] mb-8">
        Top Tourist Attractions
      </h1>

      {/* Search, Filter, and Sort Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-2/3">
              <input
                type="text"
                placeholder="Search attractions or cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border border-[#009246]/20 focus:outline-none focus:border-[#009246] transition-colors"
              />
            </div>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full sm:w-1/3 h-12 px-4 rounded-lg border border-[#009246]/20 focus:outline-none focus:border-[#009246] transition-colors cursor-pointer"
            >
              <option value="all">All Regions</option>
              <option value="Luzon">Luzon</option>
              <option value="Visayas">Visayas</option>
              <option value="Mindanao">Mindanao</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <div className="flex gap-2">
              {['name', 'city', 'region'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    sortBy === option
                      ? 'bg-[#009246] text-white'
                      : 'bg-white text-gray-600 border border-[#009246]/20 hover:border-[#009246]'
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredAttractions.map((attraction) => (
          <motion.div
            key={`${attraction.id}-${attraction.cityName}`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-[#009246]/20 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            onClick={() => handleAttractionClick(attraction)}
          >
            <div className="relative h-48">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">{attraction.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#009246] font-medium">{attraction.cityName}</span>
                <span className="text-sm text-gray-600">{attraction.region}</span>
              </div>
              {attraction.description && (
                <p className="text-gray-600 text-sm line-clamp-2">
                  {attraction.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredAttractions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No attractions found. Try adjusting your search or filter.
          </p>
        </div>
      )}

      {/* Detailed View Modal */}
      <AnimatePresence>
        {selectedAttraction && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-xl"
            >
              <div className="relative h-[40vh]">
                <img
                  src={selectedAttraction.image}
                  alt={selectedAttraction.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[50vh]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#009246] mb-1">{selectedAttraction.name}</h2>
                    <p className="text-gray-600">Located in {selectedAttraction.cityName}, {selectedAttraction.region}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {selectedAttraction.description && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">About</h3>
                      <p className="text-gray-600">{selectedAttraction.description}</p>
                    </div>
                  )}
                  
                  {/* Additional details can be added here */}
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <h3 className="text-lg font-semibold">Quick Info</h3>
                    <p className="text-gray-600">
                      <span className="font-medium">Region:</span> {selectedAttraction.region}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">City:</span> {selectedAttraction.cityName}
                    </p>
                    {selectedAttraction.visitingHours && (
                      <p className="text-gray-600">
                        <span className="font-medium">Visiting Hours:</span> {selectedAttraction.visitingHours}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Attractions;