import { Envelope, Lock, SignIn } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '../../components/buttons/Button';
import { PasswordInput } from '../../components/forms/PasswordInput';
import { TextInput } from '../../components/forms/TextInput';
import { useAuth } from '../../hooks/useAuth';

type IFormInputs = {
  email: string;
  password: string;
};

export function Login() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IFormInputs>();
  const { login } = useAuth();

  const canSubmit = !isLoading;

  const onSubmit = handleSubmit(async ({ email, password }: IFormInputs) => {
    if (!canSubmit) return;
    setLoading(true);
    await login(email, password);
    setLoading(false);
  });

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
        <TextInput
          className="flex flex-col gap-3"
          id="email"
          label="E-mail"
          inputProps={{
            ...register('email'),
            placeholder: 'usuario@exemplo.com.br',
          }}
          icon={<Envelope className="w-6 h-6 text-neutral-400" />}
        />

        <PasswordInput
          className="flex flex-col gap-3"
          id="password"
          label="Senha"
          inputProps={{
            ...register('password'),
            placeholder: '********',
          }}
          icon={<Lock className="w-6 h-6 text-neutral-400" />}
        />

        <Button type="submit" intent="primary" disabled={!canSubmit}>
          <SignIn className="w-5 h-5" />
          <span>Entrar na Plataforma</span>
        </Button>
      </form>
    </div>
  );
}
