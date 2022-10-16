import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  intent: 'primary' | 'success' | 'error';
}

export function Button({
  className,
  children,
  intent = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'flex items-center justify-center gap-3',
        'mt-4 py-3 px-4 w-full h-12',
        'text-sm text-white font-semibold',
        'rounded focus:ring-2 ring-white transition-colors disabled:opacity-50',
        {
          'bg-indigo-600 hover:bg-indigo-500 disabled:hover:bg-indigo-600':
            intent === 'primary',
          'bg-green-600 hover:bg-green-500 disabled:hover:bg-green-600':
            intent === 'success',
          'bg-red-600 hover:bg-red-500 disabled:hover:bg-red-600':
            intent === 'error',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
