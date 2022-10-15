export function TopBar() {
  return (
    <div className="flex flex-row gap-5 items-center px-5 py-2 h-16 w-auto bg-gray-800">
      <h2 className="font-bold text-xl text-gray-100 whitespace-nowrap">
        Controle de Pedidos
      </h2>

      <button
        type="button"
        className="py-2 px-4 h-10 rounded text-sm text-indigo-400 font-semibold bg-gray-800 transition-colors hover:bg-gray-700 ring-transparent"
      >
        Pedidos
      </button>

      <button
        type="button"
        className="py-2 px-4 h-10 rounded text-sm text-gray-100 font-semibold bg-gray-800 transition-colors hover:bg-gray-700 ring-transparent"
      >
        Relatórios
      </button>

      <span className="h-1 w-full" />

      <div className="flex flex-row gap-1 text-gray-100 text-sm">
        <span className="font-bold">Usuário:</span>
        <span className="font-semibold">Exemplo</span>
      </div>

      <button
        type="button"
        className="py-2 px-4 h-10 rounded text-sm text-gray-100 font-semibold bg-gray-800 transition-colors hover:bg-gray-700 ring-transparent"
      >
        Sair
      </button>
    </div>
  );
}
