import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface NavButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function NavButton({ className, children, ...props }: NavButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'flex items-center justify-center gap-3',
        'py-2 px-4 h-10',
        'text-sm text-neutral-100 font-semibold',
        'rounded focus:ring-0 ring-transparent',
        'bg-neutral-800 hover:bg-neutral-700 transition-colors disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
