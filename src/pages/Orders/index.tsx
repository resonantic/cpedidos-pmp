import { Eraser, FloppyDisk, Trash } from 'phosphor-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/buttons/Button';
import { NavBar } from '../../components/layout/NavBar';
import { useDebouncedCallback } from '../../hooks/useDebouncedCallback';
import { useOrder } from '../../hooks/useOrder';
import { Order, OrderType } from '../../models/order';

type IFormInputs = Order;

export function Orders() {
  const { register, handleSubmit, reset, watch, getValues } =
    useForm<IFormInputs>();
  const { emptyOrder, getOrder, saveOrder, deleteOrder } = useOrder();

  const onSearch = useDebouncedCallback(
    async (number: string, type: OrderType) => {
      const order = await getOrder(number, type);
      const formValues = getValues(['number', 'type']);

      if (number === formValues[0] && type === formValues[1]) {
        reset(order ?? { ...emptyOrder(), number, type });
      }
    },
    [getOrder, emptyOrder, reset, getValues],
    400
  );

  const onSave = handleSubmit(async (data: IFormInputs) => {
    saveOrder(data);
  });

  const onClear = () => reset({ ...emptyOrder() });

  const onDelete = handleSubmit(async ({ number, type }: IFormInputs) => {
    deleteOrder(number, type);
  });

  const canSave = true;

  const canClear = true;

  const canDelete = true;

  useEffect(() => {
    const { unsubscribe } = watch(async ({ number, type }, { name }) => {
      if (name === 'number' || name === 'type') {
        if (!!number && !!type) {
          onSearch(number, type);
        } else {
          reset({ ...emptyOrder(), number, type });
        }
      }
    });
    return unsubscribe;
  }, [watch, reset, onSearch, emptyOrder]);

  return (
    <div className="w-screen min-h-screen bg-neutral-900 flex flex-col items-center text-neutral-100">
      <NavBar />

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
          <Button type="submit" intent="success" disabled={!canSave}>
            <FloppyDisk className="w-5 h-5" />
            <span>Salvar</span>
          </Button>

          <Button intent="primary" disabled={!canClear} onClick={onClear}>
            <Eraser className="w-5 h-5" />
            <span>Limpar</span>
          </Button>

          <Button intent="error" disabled={!canDelete} onClick={onDelete}>
            <Trash className="w-5 h-5" />
            <span>Excluir</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
