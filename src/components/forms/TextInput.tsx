import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

interface TextInputProps {
  id: string;
  label: string;
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  className: string;
  inputClassName?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export function TextInput({
  id,
  label,
  inputProps,
  className,
  inputClassName,
  icon,
  disabled,
}: TextInputProps) {
  return (
    <label htmlFor={id} className={className}>
      <span
        className={clsx('font-sans font-semibold text-sm', {
          'text-neutral-100': !disabled,
          'text-neutral-500': disabled,
        })}
      >
        {label}
      </span>

      <div className="flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400">
        {icon}

        <input
          type="text"
          id={id}
          disabled={disabled}
          className={clsx(
            'bg-transparent h-12 flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none',
            inputClassName
          )}
          {...inputProps}
        />
      </div>
    </label>
  );
}
