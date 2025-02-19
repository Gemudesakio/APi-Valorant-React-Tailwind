import Card from "./Card";
import { useState } from "react";

export default function EquipoModal({ equipo = [], categories, search, handleEquipo }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="fixed bottom-5 right-5 bg-[#0F1921] hover:text-red-600 font-bold p-2 rounded w-[120px] text-amber-50 hover:bg-gray-700 z-[9999]"
      >
        Ver equipo ({equipo?.length || 0}/5)
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg flex justify-center items-center z-50 p-4"
          onClick={toggleModal}
        >
          <div
            className="bg-[#0F1921] p-6 rounded-lg shadow-lg relative  max-w-2xl 
                      max-h-[90vh] overflow-y-auto sm:max-h-[80vh]  "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            <h2 className="text-xl text-center text-amber-50 font-bold mb-4">Equipo Seleccionado</h2>

            {equipo?.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4 overflow-auto p-2 ">
                {equipo.map((personaje) => (
                  <Card
                    key={personaje.uuid}
                    personaje={personaje}
                    categories={categories ?? []} 
                    search={search}
                    handleEquipo={handleEquipo}
                    equipo={equipo}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center font-black italic">No hay personajes en el equipo.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
