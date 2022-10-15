import { ClipboardText, ShoppingCart, SignOut } from 'phosphor-react';

export function TopBar() {
  return (
    <div className="flex flex-row gap-5 items-center px-5 py-2 h-16 w-full bg-neutral-800 sticky top-0">
      <h2 className="font-bold text-xl text-neutral-100 whitespace-nowrap mr-4">
        Controle de Pedidos
      </h2>

      <button
        type="button"
        className="flex items-center justify-center gap-3 py-2 px-4 h-10 rounded text-sm text-indigo-400 font-semibold bg-neutral-800 transition-colors hover:bg-neutral-700 ring-transparent"
      >
        <ShoppingCart className="w-5 h-5" />
        Pedidos
      </button>

      <button
        type="button"
        className="flex items-center justify-center gap-3 py-2 px-4 h-10 rounded text-sm text-neutral-100 font-semibold bg-neutral-800 transition-colors hover:bg-neutral-700 ring-transparent"
      >
        <ClipboardText className="w-5 h-5" />
        Relatórios
      </button>

      <span className="h-1 w-full" />

      <div className="flex flex-row gap-1 text-neutral-100 text-sm">
        <span className="font-bold">Usuário:</span>
        <span className="font-semibold">Exemplo</span>
      </div>

      <button
        type="button"
        className="flex items-center justify-center gap-3 py-2 px-4 h-10 rounded text-sm text-neutral-100 font-semibold bg-neutral-800 transition-colors hover:bg-neutral-700 ring-transparent"
      >
        <SignOut className="w-5 h-5" />
        Sair
      </button>
    </div>
  );
}
