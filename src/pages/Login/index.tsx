import { Envelope, Lock, SignIn } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/buttons/Button';
import { useAuth } from '../../hooks/useAuth';

type IFormInputs = {
  email: string;
  password: string;
};

export function Login() {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const { login } = useAuth();

  const onSubmit = handleSubmit(({ email, password }: IFormInputs) => {
    login(email, password);
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

        <Button type="submit" intent="primary" disabled={!canSubmit}>
          <SignIn className="w-5 h-5" />
          <span>Entrar na Plataforma</span>
        </Button>
      </form>
    </div>
  );
}
