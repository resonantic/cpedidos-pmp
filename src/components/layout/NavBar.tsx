import {
  CircleNotch,
  ClipboardText,
  ShoppingCart,
  SignOut,
} from 'phosphor-react';
import { useAuth } from '../../hooks/useAuth';
import { NavButton } from '../buttons/NavButton';
import { NavLinkButton } from '../buttons/NavLinkButton';

export function NavBar() {
  const { user, logout } = useAuth();

  const onLogout = async () => {
    await logout();
  };

  return (
    <div className="flex flex-row gap-5 items-center px-5 py-2 h-16 w-full bg-neutral-800 sticky top-0">
      <h2 className="font-bold text-xl text-neutral-100 whitespace-nowrap mr-4">
        Controle de Pedidos
      </h2>

      <NavLinkButton to="/pedidos">
        <ShoppingCart className="w-5 h-5" />
        <span>Pedidos</span>
      </NavLinkButton>

      <NavLinkButton to="/relatorios">
        <ClipboardText className="w-5 h-5" />
        <span>Relatórios</span>
      </NavLinkButton>

      <span className="h-1 w-full" />

      <div className="flex flex-row gap-1 text-neutral-100 text-sm">
        {user ? (
          <span className="font-semibold">{user.email}</span>
        ) : (
          <CircleNotch weight="bold" className="w-5 h-5 animate-spin" />
        )}
      </div>

      <NavButton onClick={onLogout}>
        <SignOut className="w-5 h-5" />
        <span>Sair</span>
      </NavButton>
    </div>
  );
}
