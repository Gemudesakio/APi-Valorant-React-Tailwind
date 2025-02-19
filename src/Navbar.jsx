import { useState } from 'react';
import ValorantLogo from './assets/ValorantLogo.png';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 py-4 sm:flex sm:items-center sm:justify-between bg-black">
      {/* Sección del logo y botón de menú */}
      <section className="flex justify-between items-center">
        <img className="w-32 h-auto" src={ValorantLogo} alt="logo valorant" />
        <button 
          className="sm:hidden" 
          onClick={() => setIsOpen(!isOpen)} // Cambia el estado al hacer click
        >
          <Menu size={32} color="red" />
        </button>
      </section>

      {/* Menú de navegación (se oculta en móviles si isOpen es false) */}
      <div className={`flex flex-col gap-2 mt-3 mx-4 sm:flex-row sm:m-0 ${isOpen ? 'block' : 'hidden'} sm:block`}>
        <button className="px-2 py-1 inline-block text-left  font-bold hover:bg-gray-700 text-amber-50 hover:text-red-600 rounded">
          Character
        </button>
        <button className="px-2 py-1 inline-block text-left font-bold hover:bg-gray-700 text-amber-50 hover:text-red-600 rounded">
          Home
        </button>
        <button className="px-2 py-1 inline-block text-left font-bold hover:bg-gray-700 text-amber-50 hover:text-red-600 rounded">
          Docs
        </button>
      </div>
    </nav>
  );
}
