import React, { use } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Card({ cities }) {


  return (
        <div className="flex justify-center 
        mt-6 min-h-screen">

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

        {cities.map((city) => (
          <li key={city.id} 
          className="w-full max-w-[310px] h-[280px] mx-auto 
          flex flex-col 
          justify-end p-4 shadow-lg
          border border-black
          bg-green-700 rounded-xl
          text-white
          hover:scale-105 
          transition duration-300 ease-in-out 
           ">
        
        <Link to={`/cities/${city.id}`}>
        
          <div className="w-full h-[180px] 
          overflow-hidden 
          rounded-t-xl
          shadow-3xl">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-[180px] object-cover rounded-t-xl"
              />
          </div>

            <div>
                <h1 className="text-lg font-bold">{city.name}</h1>
                <p>Region: {city.category}</p>
            </div>
        </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card;
