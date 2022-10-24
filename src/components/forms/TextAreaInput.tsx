import clsx from 'clsx';
import { ChangeEvent } from 'react';

interface TextAreaInputProps {
  id: string;
  label: string;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  rows?: number;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextAreaInput({
  id,
  label,
  className,
  inputClassName,
  disabled,
  rows,
  placeholder,
  value,
  onChange,
}: TextAreaInputProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

      <div className="flex items-center h-25 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400">
        <textarea
          id={id}
          disabled={disabled}
          rows={rows}
          className={clsx(
            'bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none resize-none',
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
