import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

interface DateInputProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  className: string;
  inputClassName?: string;
  control: Control<T, unknown>;
  disabled?: boolean;
}

export function DateInput<T extends FieldValues>({
  id,
  label,
  className,
  inputClassName,
  control,
  disabled,
}: DateInputProps<T>) {
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.disabled = !!disabled;
      inputRef.className = clsx(
        'bg-transparent h-12 flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none',
        inputClassName
      );
    }
  }, [disabled, inputClassName, inputRef]);

  const mask = Date;
  const pattern = 'd{/}m{/}Y';
  const format = (date: Date) => {
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString();
    const year = date.getFullYear();
    return [day.padStart(2, '0'), month.padStart(2, '0'), year].join('/');
  };
  const parse = (str: string) => {
    const [day, month, year] = str.split('/');
    return new Date(+year, +month - 1, +day);
  };

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
        <Controller
          control={control}
          name={id}
          render={({ field: { onChange, value } }) => (
            <IMaskInput
              mask={mask}
              pattern={pattern}
              format={format}
              parse={parse}
              value={value}
              onAccept={onChange}
              inputRef={(el) => {
                if (el) {
                  const ref = el as HTMLInputElement;
                  ref.disabled = !!disabled;
                  ref.className = clsx(
                    'bg-transparent h-12 flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none',
                    inputClassName
                  );
                  setInputRef(ref);
                } else {
                  setInputRef(null);
                }
              }}
            />
          )}
        />
      </div>
    </label>
  );
}
