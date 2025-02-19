import { Twitter, Youtube, Instagram, Facebook, Headset  } from 'lucide-react';
import riot from './assets/Riot.png'
import ESRB from './assets/ESRB.png'
const Footer = () => {
    return (
      <footer className="bg-black text-white text-center p-6">
        <div className="flex justify-center space-x-4 mb-4">
          <button className="text-gray-400 hover:text-white"><Twitter /></button>
          <button className="text-gray-400 hover:text-white"><Youtube /></button>
          <button className="text-gray-400 hover:text-white"><Instagram /></button>
          <button className="text-gray-400 hover:text-white"><Facebook /></button>
          <button className="text-gray-400 hover:text-white"><Headset /></button>
        </div>
        
        <div className="flex justify-center items-center mb-4 h-32 w-64 overflow-hidden m-auto opacity-50 hover:opacity-100">
          <img src={riot} alt="Riot Games" className="h-full scale-150" />
        </div>
        
        <p className="text-gray-400 text-sm mb-4">
          &copy; 2020-2025 Riot Games, Inc. RIOT GAMES, VALORANT y todos los logotipos relacionados son marcas y nombres comerciales,
          marcas de servicio o marcas registradas de Riot Games, Inc.
        </p>
        
        <div className="flex justify-center flex-wrap space-x-6 text-sm font-bold">
          <a href="#" className="hover:underline">AVISO DE PRIVACIDAD</a>
          <a href="#" className="hover:underline">TÉRMINOS DE SERVICIO</a>
          <a href="#" className="hover:underline">PREFERENCIAS DE COOKIES</a>
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className="bg-gray-800 p-4 rounded-lg text-left text-sm flex gap-3 items-center">
            <img src={ESRB} alt="ESRB" className="mb-2 h-32" />
            <ul className="text-gray-300 font-bold">
              <li>Sangre</li>
              <li>Lenguaje</li>
              <li>Violencia</li> 
              <li>Interacción de usuarios</li>
              <li>Compras dentro del juego</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  