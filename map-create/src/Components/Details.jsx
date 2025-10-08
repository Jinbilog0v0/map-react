import { useParams, useNavigate} from "react-router-dom";
import cities from "../FilterData/Cities";
import Searchbar from "./Searchbar";

function Details(){

  const { id } = useParams();
  const navigate = useNavigate();
  const city = cities.find((c) => c.id === parseInt(id));
  if (!city) {
    return <h1>City not found</h1>;
  }

  return (
    <div className="overflow-x-hidden pb-6"> 
      <div className="relative flex items-center h-[70px] sticky top-0 z-50 bg-white border-b px-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-green-900 px-3 py-2 text-sm sm:text-base rounded-md"
        >
          ⮜ Back
        </button>

        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold">
          City Details
        </h1>

        <button
          className="ml-auto bg-white text-black px-3 py-2 text-sm sm:text-base rounded-md"
        >
          🛈
        </button>
      </div>

      {/* Searchbar
      <Searchbar /> */}

      
    <div className="w-full flex justify-center items-center mt-8 px-4">
      <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-6">

        <img
          src={city.image}
          alt={city.name}
          className="w-full md:w-[500px] h-[250px] md:h-[400px] object-cover rounded-2xl border-2 border-black"
        />

          <div className="flex flex-col mt-4 md:mt-0">
            <h2 className="font-bold text-xl">{city.name}</h2>

            <p>Read: {city.detail}</p>
          </div>
      </div>
    </div>


    {/*Attractions */}
      <div className="flex flex-col items-center mt-10">
        <div className="border border-black w-full max-w-[900px] h-[60px] flex items-center justify-center mb-4 px-2">
        <h1 className="font-bold text-2xl">Top Attractions</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {city.attractions?.map((p) =>(
            <div
              key={p.id}
              className="w-[260px] h-[230px] text-white bg-green-700 border border-black shadow-lg rounded-xl overflow-hidden hover:scale-108 transition ease-in-out"
            >
              
              <img 
                src={p.image}
                alt={p.name}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-2 text-center">
                <h3>{p.name}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Details;
