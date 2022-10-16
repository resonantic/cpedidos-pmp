import { Eraser, FloppyDisk, Trash } from 'phosphor-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TopBar } from '../../components/TopBar';

type IFormInputs = {
  number: string;
  type: 'SE' | 'RM' | 'MEMORANDO' | 'OUTRO';
  arrivalDate: string;
  secretary: string;
  project: string;
  description: string;
  sendDate: string;
  returnDate: string;
  situation: string;
  notes: string;
};

export function Orders() {
  const { register, handleSubmit, reset, watch, getValues } =
    useForm<IFormInputs>();

  const onSave = handleSubmit((data: IFormInputs) => {
    console.log(data);
  });

  const onClear = () => reset();

  const onDelete = handleSubmit(({ number, type }: IFormInputs) => {
    console.log(number, type);
  });

  const canSave = true;

  const canClear = true;

  const canDelete = true;

  const mustSearch = watch(['number', 'type']);

  useEffect(() => {
    const { number, type } = getValues();
    console.log('search', number, type);
  }, [mustSearch, getValues]);

  return (
    <div className="w-screen min-h-screen bg-neutral-900 flex flex-col items-center text-neutral-100">
      <TopBar />

      <form
        onSubmit={onSave}
        className="flex flex-col px-5 gap-4 mt-10 w-full max-w-5xl"
      >
        <div className="flex flex-row gap-4">
          <label htmlFor="number" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Número
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                {...register('number')}
                type="text"
                id="number"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="type" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Tipo
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <select
                {...register('type')}
                id="type"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              >
                {['SE', 'RM', 'MEMORANDO', 'OUTRO'].map((type) => (
                  <option value={type} key={type} className="bg-neutral-800">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <span className="w-full" />
        </div>

        <div className="flex flex-row gap-4">
          <label htmlFor="arrivalDate" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Data de Chegada
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400">
              <input
                {...register('arrivalDate')}
                type="text"
                id="arrivalDate"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="secretary" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Secretaria
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                {...register('secretary')}
                type="text"
                id="secretary"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="project" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Projeto
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                {...register('project')}
                type="text"
                id="project"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-row gap-4">
          <label htmlFor="description" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Descrição
            </span>

            <div className="flex items-center h-25 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <textarea
                {...register('description')}
                id="description"
                rows={4}
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none resize-none"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-row gap-4">
          <label htmlFor="sendDate" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Data de Envio ao Financeiro
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                {...register('sendDate')}
                type="text"
                id="sendDate"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="returnDate" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Data de Retorno do Financeiro
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                {...register('returnDate')}
                type="text"
                id="returnDate"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>

          <label htmlFor="situation" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Situação
            </span>

            <div className="flex items-center h-12 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <input
                {...register('situation')}
                type="text"
                id="situation"
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-row gap-4">
          <label htmlFor="notes" className="flex flex-col gap-3 w-full">
            <span className="text-neutral-100 font-sans font-semibold text-sm">
              Observações
            </span>

            <div className="flex items-center h-25 py-4 px-3 rounded w-full bg-neutral-800 focus-within:ring-2 ring-indigo-400 ">
              <textarea
                {...register('notes')}
                id="notes"
                rows={4}
                className="bg-transparent flex-1 text-neutral-100 text-xs placeholder:text-neutral-400 outline-none resize-none"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-row gap-4">
          <button
            type="submit"
            className="flex items-center justify-center gap-3 mt-4 py-3 px-4 w-full h-12 rounded text-sm text-white font-semibold bg-green-600 transition-colors hover:bg-green-500 focus:ring-2 ring-white disabled:hover:bg-green-600 disabled:opacity-50"
            disabled={!canSave}
          >
            <FloppyDisk className="w-5 h-5" />
            Salvar
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-3 mt-4 py-3 px-4 w-full h-12 rounded text-sm text-white font-semibold bg-indigo-600 transition-colors hover:bg-indigo-500 focus:ring-2 ring-white disabled:hover:bg-indigo-600 disabled:opacity-50"
            disabled={!canClear}
            onClick={onClear}
          >
            <Eraser className="w-5 h-5" />
            Limpar
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-3 mt-4 py-3 px-4 w-full h-12 rounded text-sm text-white font-semibold bg-red-600 transition-colors hover:bg-red-500 focus:ring-2 ring-white disabled:hover:bg-red-600 disabled:opacity-50"
            disabled={!canDelete}
            onClick={onDelete}
          >
            <Trash className="w-5 h-5" />
            Excluir
          </button>
        </div>
      </form>
    </div>
  );
}
