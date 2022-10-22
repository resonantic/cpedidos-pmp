import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';

interface TextAreaInputProps {
  id: string;
  label: string;
  inputProps: TextareaHTMLAttributes<HTMLTextAreaElement>;
  className: string;
  rows: number;
  inputClassName?: string;
  disabled?: boolean;
}

export function TextAreaInput({
  id,
  label,
  inputProps,
  className,
  inputClassName,
  rows,
  disabled,
}: TextAreaInputProps) {
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

      <div className="flex items-center h-25 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400">
        <textarea
          id={id}
          disabled={disabled}
          rows={rows}
          className={clsx(
            'bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none resize-none',
            inputClassName
          )}
          {...inputProps}
        />
      </div>
    </label>
  );
}
