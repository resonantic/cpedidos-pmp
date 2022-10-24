import clsx from 'clsx';
import { ChangeEvent } from 'react';

interface SelectInputProps<T extends string> {
  id: string;
  label: string;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  options: T[];
  value: string;
  onChange: (value: T) => void;
}

export function SelectInput<T extends string>({
  id,
  label,
  className,
  inputClassName,
  disabled,
  options,
  value,
  onChange,
}: SelectInputProps<T>) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as T;
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

      <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400">
        <select
          id={id}
          disabled={disabled}
          className={clsx(
            'bg-transparent h-12 flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none',
            inputClassName
          )}
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option value={option} key={option} className="bg-neutral-800">
              {option}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}
