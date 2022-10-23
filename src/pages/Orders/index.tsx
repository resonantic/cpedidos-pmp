import { Eraser, FloppyDisk, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/buttons/Button';
import { NavBar } from '../../components/layout/NavBar';
import { useDebouncedCallback } from '../../hooks/useDebouncedCallback';
import { useOrder } from '../../hooks/useOrder';
import { Order, OrderType } from '../../models/order';
import { TextInput } from '../../components/forms/TextInput';
import { DateInput } from '../../components/forms/DateInput';
import { TextAreaInput } from '../../components/forms/TextAreaInput';
import { SelectInput } from '../../components/forms/SelectInput';

type IFormInputs = Order;

export function Orders() {
  const [isSearching, setSearching] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, reset, watch, getValues, control } =
    useForm<IFormInputs>();
  const { emptyOrder, getOrder, saveOrder, deleteOrder } = useOrder();

  const canSearch = !isLoading;

  const canType =
    !isLoading && !isSearching && !!watch('number') && !!watch('type');

  const canSave =
    !isLoading && !isSearching && !!watch('number') && !!watch('type');

  const canClear =
    !isLoading &&
    (watch('type') !== 'SE' ||
      !!watch('number') ||
      !!watch('arrivalDate') ||
      !!watch('secretary') ||
      !!watch('project') ||
      !!watch('description') ||
      !!watch('sendDate') ||
      !!watch('returnDate') ||
      !!watch('situation') ||
      !!watch('notes'));

  const canDelete = !isLoading && !isSearching && !!watch('id');

  const onSearch = useDebouncedCallback(
    async (number: string, type: OrderType) => {
      if (!canSearch) return;
      setSearching(true);
      const order = await getOrder(number, type);
      const formValues = getValues(['number', 'type']);

      if (number === formValues[0] && type === formValues[1]) {
        reset(order ?? { ...emptyOrder(), number, type });
      }
      setSearching(false);
    },
    [getOrder, emptyOrder, reset, getValues],
    400
  );

  const onSave = handleSubmit(async (data: IFormInputs) => {
    if (!canSave) return;
    setLoading(true);
    const order = await saveOrder(data);
    if (order) reset(order);
    setLoading(false);
  });

  const onClear = () => {
    if (!canClear) return;
    setLoading(true);
    reset({ ...emptyOrder() });
    setLoading(false);
  };

  const onDelete = handleSubmit(async ({ number, type }: IFormInputs) => {
    if (!canDelete) return;
    setLoading(true);
    const result = await deleteOrder(number, type);
    if (result) reset({ ...emptyOrder() });
    setLoading(false);
  });

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

      <form className="flex flex-col px-5 gap-4 mt-10 w-full max-w-5xl">
        <div className="flex flex-row gap-4">
          <TextInput
            className="flex flex-col gap-3 w-full"
            id="number"
            label="Número"
            inputProps={{
              ...register('number'),
              autoFocus: true,
            }}
            disabled={!canSearch}
          />

          <SelectInput
            className="flex flex-col gap-3 w-full"
            id="type"
            label="Tipo"
            inputProps={{ ...register('type') }}
            options={['SE', 'RM', 'MEMORANDO', 'OUTRO']}
            disabled={!canSearch}
          />

          <span className="w-full" />
        </div>

        <div className="flex flex-row gap-4">
          <DateInput
            className="flex flex-col gap-3 w-full"
            id="arrivalDate"
            label="Data de Chegada"
            control={control}
            disabled={!canType}
          />

          <TextInput
            className="flex flex-col gap-3 w-full"
            id="secretary"
            label="Secretaria"
            inputProps={{ ...register('secretary') }}
            disabled={!canType}
          />

          <TextInput
            className="flex flex-col gap-3 w-full"
            id="project"
            label="Projeto"
            inputProps={{ ...register('project') }}
            disabled={!canType}
          />
        </div>

        <div className="flex flex-row gap-4">
          <TextAreaInput
            className="flex flex-col gap-3 w-full"
            id="description"
            label="Descrição"
            rows={4}
            inputProps={{ ...register('description') }}
            disabled={!canType}
          />
        </div>

        <div className="flex flex-row gap-4">
          <DateInput
            className="flex flex-col gap-3 w-full"
            id="sendDate"
            label="Data de Envio ao Financeiro"
            control={control}
            disabled={!canType}
          />

          <DateInput
            className="flex flex-col gap-3 w-full"
            id="returnDate"
            label="Data de Retorno do Financeiro"
            control={control}
            disabled={!canType}
          />

          <TextInput
            className="flex flex-col gap-3 w-full"
            id="situation"
            label="Situação"
            inputProps={{ ...register('situation') }}
            disabled={!canType}
          />
        </div>

        <div className="flex flex-row gap-4">
          <TextAreaInput
            className="flex flex-col gap-3 w-full"
            id="notes"
            label="Observações"
            rows={4}
            inputProps={{ ...register('notes') }}
            disabled={!canType}
          />
        </div>

        <div className="flex flex-row gap-4">
          <Button intent="success" disabled={!canSave} onClick={onSave}>
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
