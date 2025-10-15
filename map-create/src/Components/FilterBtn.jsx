function Filter({ filter, setFilter }) {
  const buttons = ["all", "Luzon", "Visayas", "Mindanao"];

    return (
      <div className="flex flex-wrap gap-3 justify-center items-center px-4">
        
        {buttons.map((region) => (
          <button
          key={region}
          onClick={() => setFilter(region)}
          className={`w-[calc(50%-0.75rem)] sm:w-[120px] h-[45px] sm:h-[50px] border transition duration-300 ease-in-out font-medium 
          rounded-2xl shadow-md border-[#009246]/20 cursor-pointer text-sm sm:text-base
          hover:scale-105 text-[#009246] 
          ${filter === region ? "bg-[#009246] text-white scale-105" : "bg-white hover:bg-[#009246] hover:text-white hover:scale-105"}`}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
            
          </button>
        ))}


      </div>
    )
}

export default Filter;
