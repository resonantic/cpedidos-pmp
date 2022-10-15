import { Envelope, Lock } from 'phosphor-react';

export function Login() {
  function handleSubmit() {}

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <h2 className="mt-4 text-gray-100 font-sans font-bold text-2xl">
          Controle de Pedidos
        </h2>

        <span className="mt-1 text-gray-400 font-sans text-md">
          Faça login para acessar a plataforma!
        </span>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <span className="text-gray-100 font-sans font-semibold">E-mail</span>

          <div className="flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-indigo-400 ">
            <Envelope className="w-6 h-6 text-gray-400" />

            <input
              type="email"
              id="email"
              placeholder="usuario@exemplo.com.br"
              className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
            />
          </div>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <span className="text-gray-100 font-sans font-semibold">Senha</span>

          <div className="flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-indigo-400 ">
            <Lock className="w-6 h-6 text-gray-400" />

            <input
              type="password"
              id="password"
              placeholder="********"
              className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
            />
          </div>
        </label>

        <button
          type="submit"
          className="mt-4 py-3 px-4 w-full rounded text-sm text-white font-semibold bg-indigo-500 transition-colors hover:bg-indigo-400 focus:ring-2 ring-white"
          onClick={handleSubmit}
        >
          Entrar na Plataforma
        </button>
      </form>
    </div>
  );
}
