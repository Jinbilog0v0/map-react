function Filter({ filter, setFilter }) {
  const buttons = ["all", "Luzon", "Visayas", "Mindanao"];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 mt-4">
      {buttons.map((region) => (
        <button
          key={region}
          onClick={() => setFilter(region)}
          className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-2 rounded-2xl shadow-lg font-medium text-sm sm:text-base md:text-lg transition duration-300 ease-in-out 
            ${
              filter === region
                ? "bg-green-700 text-white scale-105"
                : "bg-white border-green-900 hover:bg-green-900 hover:text-white hover:scale-105"
            }`}
        >
          {region.charAt(0).toUpperCase() + region.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;
