import { signInWithEmailAndPassword } from 'firebase/auth';
import { Envelope, Lock, SignIn } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { auth } from '../../config/firebase';

type IFormInputs = {
  email: string;
  password: string;
};

export function Login() {
  const { register, handleSubmit } = useForm<IFormInputs>();

  const onSubmit = handleSubmit(({ email, password }: IFormInputs) => {
    signInWithEmailAndPassword(auth, email, password);
  });

  const canSubmit = true;

  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col items-center justify-center text-neutral-100">
      <header className="flex flex-col items-center">
        <h2 className="mt-4 text-neutral-100 font-sans font-bold text-2xl">
          Controle de Pedidos
        </h2>

        <span className="mt-1 text-neutral-400 font-sans text-md">
          Faça login para acessar a plataforma!
        </span>
      </header>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        <label htmlFor="email" className="flex flex-col gap-3">
          <span className="text-neutral-100 font-sans font-semibold text-sm">
            E-mail
          </span>

          <div className="flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400">
            <Envelope className="w-6 h-6 text-neutral-400" />

            <input
              {...register('email')}
              type="email"
              id="email"
              placeholder="usuario@exemplo.com.br"
              className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
            />
          </div>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <span className="text-neutral-100 font-sans font-semibold text-sm">
            Senha
          </span>

          <div className="flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400">
            <Lock className="w-6 h-6 text-neutral-400" />

            <input
              {...register('password')}
              type="password"
              id="password"
              placeholder="********"
              className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
            />
          </div>
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-3 mt-4 py-3 px-4 w-full h-12 rounded text-sm text-white font-semibold bg-indigo-600 transition-colors hover:bg-indigo-500 focus:ring-2 ring-white"
          disabled={!canSubmit}
        >
          <SignIn className="w-5 h-5" />
          Entrar na Plataforma
        </button>
      </form>
    </div>
  );
}
