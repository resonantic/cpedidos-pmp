import clsx from 'clsx';
import { ChangeEvent, ReactNode } from 'react';

interface PasswordInputProps {
  id: string;
  label: string;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function PasswordInput({
  id,
  label,
  className,
  inputClassName,
  disabled,
  icon,
  placeholder,
  value,
  onChange,
}: PasswordInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);
  };

  return (
    <label htmlFor={id} className={clsx('flex flex-col gap-3', className)}>
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
          type="password"
          id={id}
          disabled={disabled}
          className={clsx(
            'bg-transparent h-12 flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none',
            inputClassName
          )}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </label>
  );
}
