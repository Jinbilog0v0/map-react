import { useParams, useNavigate} from "react-router-dom";
import cities from "../FilterData/Cities";

function Details(){
  const { id } = useParams();
  const navigate = useNavigate();
  const city = cities.find((c) => c.id === parseInt(id));
  
  if (!city) {
    return <h1>City not found</h1>;
  }

  return (
    <div className="overflow-x-hidden pb-6"> 
      <div className="flex h-[60px] sm:h-[70px] items-center justify-between px-4 bg-white mb-4">
        <button
          onClick={() => navigate(-1)} 
          className="p-2 w-[90px] sm:w-[100px] text-sm sm:text-base bg-[#009246] text-white hover:bg-[#009246]/90 rounded-lg transition duration-300 ease-in-out cursor-pointer">
          Back
        </button>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#009246]">City Details</h1>

        <button 
          type="button"
          className="p-2 w-[90px] sm:w-[100px] text-sm sm:text-base bg-[#009246] text-white hover:bg-[#009246]/90 rounded-lg transition duration-300 ease-in-out cursor-pointer"
        >
          Navigation
        </button>
      </div>
  
    <div className="w-full flex justify-center items-center mt-4 sm:mt-8">
      <div className="w-full max-w-[900px] flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          <img 
          src={city.image}
          alt={city.name}
          className="w-full lg:w-[500px] h-[250px] sm:h-[300px] lg:h-[350px] rounded-xl border border-[#009246]/20 hover:scale-[1.02] transition duration-300 ease-in-out object-cover"/>

          {/*Details */}
          <div className="flex flex-col space-y-3 p-2">
            <h2 className="font-bold text-lg sm:text-xl text-[#009246]">{city.name}</h2>
            <p className="text-sm sm:text-base leading-relaxed">{city.detail}</p>
          </div>
      </div>
    </div>


    {/*Attractions */}
      <div className="flex flex-col items-center mt-6 sm:mt-10 px-4 sm:px-6">
        <div className="w-full max-w-[900px] h-[50px] sm:h-[60px] flex items-center justify-center mb-4 border-t border-b border-[#009246]/20">
          <h1 className="font-bold text-xl sm:text-2xl text-[#009246]">Top Attractions</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-[900px]">
          {city.attractions?.map((p) =>(
            <div
              key={p.id}
              className="w-full max-w-[260px] mx-auto h-[230px] border border-[#009246]/20 shadow-md rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300 ease-in-out bg-white"
            >
              
              <img 
                src={p.image}
                alt={p.name}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="text-sm sm:text-base font-medium text-[#009246]">{p.name}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Details;
