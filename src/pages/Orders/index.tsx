import { TopBar } from '../../components/TopBar';

export function Orders() {
  function handleSave() {}

  function handleClear() {}

  function handleDelete() {}

  return (
    <div className="w-screen min-h-screen bg-neutral-900 flex flex-col items-center text-neutral-100">
      <TopBar />

      <form className="flex flex-col px-5 gap-4 mt-10 w-full max-w-5xl">
        <div className="flex flex-row gap-4">
          <label htmlFor="number" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Número
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                type="text"
                id="number"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="type" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Tipo
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                type="text"
                id="type"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <span className="w-full" />
        </div>

        <div className="flex flex-row gap-4">
          <label htmlFor="arrivalDate" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Data de Chegada
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                type="text"
                id="arrivalDate"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="secretary" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Secretaria
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                type="text"
                id="secretary"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="project" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Projeto
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                type="text"
                id="project"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-row gap-4">
          <label htmlFor="description" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Descrição
            </span>

            <div className="flex items-center h-25 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <textarea
                id="description"
                rows={4}
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none resize-none"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-row gap-4">
          <label htmlFor="sendDate" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Data de Envio ao Financeiro
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                type="text"
                id="sendDate"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="returnDate" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Data de Retorno do Financeiro
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                type="text"
                id="returnDate"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="situation" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Situação
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                type="text"
                id="situation"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-row gap-4">
          <label htmlFor="notes" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold">
              Observações
            </span>

            <div className="flex items-center h-25 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <textarea
                id="notes"
                rows={4}
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none resize-none"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-row gap-4">
          <button
            type="submit"
            className="mt-4 py-3 px-4 w-full h-12 rounded text-sm text-white font-semibold bg-indigo-500 transition-colors hover:bg-indigo-400 focus:ring-2 ring-white"
            onClick={handleSave}
          >
            Salvar
          </button>

          <button
            type="button"
            className="mt-4 py-3 px-4 w-full h-12 rounded text-sm text-white font-semibold bg-indigo-500 transition-colors hover:bg-indigo-400 focus:ring-2 ring-white"
            onClick={handleClear}
          >
            Limpar
          </button>

          <button
            type="button"
            className="mt-4 py-3 px-4 w-full h-12 rounded text-sm text-white font-semibold bg-red-500 transition-colors hover:bg-red-400 focus:ring-2 ring-white"
            onClick={handleDelete}
          >
            Excluir
          </button>
        </div>
      </form>
    </div>
  );
}
