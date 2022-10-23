import clsx from 'clsx';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

interface SelectInputProps {
  id: string;
  label: string;
  inputProps: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  className: string;
  inputClassName?: string;
  options: string[];
  disabled?: boolean;
}

export function SelectInput({
  id,
  label,
  inputProps,
  className,
  inputClassName,
  options,
  disabled,
}: SelectInputProps) {
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

      <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400">
        <select
          id={id}
          disabled={disabled}
          className={clsx(
            'bg-transparent h-12 flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none',
            inputClassName
          )}
          {...inputProps}
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
