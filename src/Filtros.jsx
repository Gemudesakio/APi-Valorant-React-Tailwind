import fondo from './assets/fondo.jpg';

export default function Filtros({ roles, search, handleSearch, categories, handleCategory }) {
  return (
    <div
      className="w-full mb-20 bg-cover bg-center flex flex-col items-center justify-center gap-3 px-40 h-[45vh] rounded-2xl"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <h2 className="font-black text-amber-50 text-5xl my-3">AGENTES</h2>
      {/* Filtro de search */}
      <input
        type="search"
        placeholder="SEARCH"
        className="px-4 py-1 rounded-lg bg-amber-50"
        value={search}
        onChange={(e) => handleSearch(e)}
      />

      {/* Filtro de Roles */}
      <div className="flex flex-wrap justify-center gap-4">
        {roles.map((role, index) => (
          <button
            key={index}
            value={role}
            className={`bg-[#0F1921] hover:text-red-600 font-bold p-2 rounded w-[120px] ${
              categories.includes(role) ? "text-red-600" : "text-amber-50"
            }`}
            onClick={() => handleCategory(role)}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
}
