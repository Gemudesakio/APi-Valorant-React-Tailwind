import fondo from './assets/background.jpg';
export default function Card({ personaje, search, categories, handleEquipo, equipo}) {
    
    const display =
    personaje.displayName.toLowerCase().trim().includes(search.toLowerCase().trim()) &&
    ((categories?.length === 0) || categories?.includes(personaje.role.displayName)) 
      ? ""
      : "hidden";
  
  
    return (
      <div
        className={`relative w-[40vw] lg:w-[20vw] bg-cover bg-center group overflow-hidden ${display}`}
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="overflow-hidden aspect-[20/30]">
          <img
            className="object-cover scale-300 translate-y-[70%] group-hover:scale-320 transform transition-transform duration-300 z-10"
            src={personaje.fullPortrait
            }
            alt={personaje.displayName}
  
           
          />
       
       <svg 
          onClick={() => handleEquipo(personaje)} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`
            lucide lucide-bookmark-plus 
            text-amber-300 
            absolute top-5 left-5 z-11 bg-black 
            hover:text-red-600 
            w-[20%] max-w-[50px] h-auto 
            transition-transform duration-200 
            hover:scale-110 
            ${equipo.includes(personaje) ? "text-red-600" : "text-amber-50"}
          `}
          >
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
          <line x1="12" x2="12" y1="7" y2="13"/>
          <line x1="15" x2="9" y1="10" y2="10"/>
      </svg>
  
        </div>
        
        <div className="w-full p-3 bg-amber-50 group-hover:opacity-60 flex flex-col sm:flex-row sm:justify-between flex-wrap z-10">
          <h2 className="text-xl font-black">{personaje.displayName}</h2>
        
          <h2 className="text-xl font-black">{personaje.role.displayName}</h2>
           
          
     
        </div>
      </div>
    );
  }
  