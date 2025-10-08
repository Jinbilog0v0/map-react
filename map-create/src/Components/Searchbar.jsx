import { useState } from "react";

function Searchbar() {
  return (
    <div className="bg-white border-b-2 border-black py-4 flex justify-center px-2">
      <form className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto justify-center items-center">
        
        {/* Navigation button */}
        <button className="h-[40px] w-full sm:w-[150px] font-medium rounded-2xl border-2 border-green-900 hover:bg-green-900 hover:text-white transition ease-in-out">
        🗺️ Navigation
        </button>

        {/* Input field */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full sm:w-[350px] md:w-[600px] lg:w-[800px] h-[40px] pl-3 border-2 border-green-900 rounded-2xl text-white bg-green-700"
        />

        {/* Search button */}
        <button
          type="submit"
          className="h-[40px] w-full sm:w-[60px] bg-green-900 hover:bg-green-700 text-white font-medium rounded-2xl"
        >
          🔍︎
        </button>

      </form>
    </div>
  );
}

export default Searchbar;
