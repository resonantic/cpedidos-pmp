import clsx from 'clsx';
import { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface NavLinkButtonProps extends NavLinkProps {
  children: ReactNode;
}

export function NavLinkButton({
  className,
  children,
  ...props
}: NavLinkButtonProps) {
  return (
    <NavLink
      type="button"
      className={({ isActive }) =>
        clsx(
          'flex items-center justify-center gap-3',
          'py-2 px-4 h-10',
          'text-sm font-semibold',
          'rounded focus:ring-0 ring-transparent',
          'bg-neutral-800 hover:bg-neutral-700 transition-colors disabled:opacity-50',
          {
            'text-indigo-400': isActive,
            'text-neutral-100': !isActive,
          },
          className
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}
