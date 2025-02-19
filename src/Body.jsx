import { useState } from 'react';
import Filtros from './Filtros';
import Card from './Card';
import EquipoModal from './EquiposModal';
export default function Body({ datos }) {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([])
  const [equipo, setEquipo] = useState([])
  const roles = Array.from(new Set(datos.map(agent => agent.role.displayName)))

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleCategory(role) {
    setCategories(prevCategories =>
      prevCategories.includes(role)
        ? prevCategories.filter(cat => cat !== role) // Si está, se quita
        : [...prevCategories, role] // Si no está,se agrega
    );
  }

/*   function handleEquipo(personaje) {
    setEquipo(prevEquipo => {
      if (prevEquipo.includes(personaje)) {
        return prevEquipo.filter(pj => pj !== personaje); 
      }
  
      if (prevEquipo.length >= 5) {
        alert("No puedes agregar más de 5 agentes al equipo."); 
        return prevEquipo; 
      }
  
      return [...prevEquipo, personaje]; 
    });
  } */

    function handleEquipo(personaje) {
      setEquipo(prevEquipo => {
        const existe = prevEquipo.some(pj => pj.uuid === personaje.uuid);
        
        if (existe) {
          return prevEquipo.filter(pj => pj.uuid !== personaje.uuid);
        }
    
        if (prevEquipo.length >= 5) {
          alert("No puedes agregar más de 5 agentes al equipo."); 
          return prevEquipo; 
        }
    
        return [...prevEquipo, personaje];
      });
    }
    
  if (equipo.length > 0) {
    console.log(equipo);
  }
    
 
  return (
    <div className="bg-[#0F1921] min-h-screen pb-5">
      <EquipoModal equipo={equipo} search={search} handleEquipo={handleEquipo}/>

      <div className="flex items-center justify-center flex-wrap gap-4">
        <Filtros
          roles={roles}
          search={search}
          handleSearch={handleSearch}
          categories={categories} 
          handleCategory={handleCategory}
        />
        {/* Mapeamos los datos */}
        {datos.map(personaje => (
          <Card
            key={personaje.uuid}
            personaje={personaje}
            categories={categories}
            search={search}
            handleEquipo={handleEquipo}
            equipo={equipo}
          />
        ))}
      </div>
    </div>
  );
}

