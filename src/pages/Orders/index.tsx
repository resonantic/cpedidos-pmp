import { Eraser, FloppyDisk, Trash } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import { Button } from '../../components/buttons/Button';
import { NavBar } from '../../components/layout/NavBar';
import { useOrder } from '../../hooks/useOrder';
import { Order, OrderType } from '../../models/order';
import { TextInput } from '../../components/forms/TextInput';
import { DateInput } from '../../components/forms/DateInput';
import { TextAreaInput } from '../../components/forms/TextAreaInput';
import { SelectInput } from '../../components/forms/SelectInput';
import { useDebouncedCallback } from '../../hooks/useDebouncedCallback';
import { useHash } from '../../hooks/useHash';

type FormData = Order;

export function Orders() {
  const { compareHash, getHash, setHash } = useHash('search');
  const [isSearching, setSearching] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { emptyOrder, getOrder, saveOrder, deleteOrder } = useOrder();
  const [formData, setFormData] = useState<FormData>(emptyOrder(''));

  const canSearch = !isLoading;

  const canType =
    !isLoading &&
    !isSearching &&
    !!formData.number &&
    !!formData.type &&
    formData.id !== '';

  const canSave =
    !isLoading &&
    !isSearching &&
    !!formData.number &&
    !!formData.type &&
    formData.id !== '';

  const canClear =
    !isLoading &&
    !isSearching &&
    formData.id !== '' &&
    (formData.type !== 'SE' ||
      !!formData.number ||
      !!formData.arrivalDate ||
      !!formData.secretary ||
      !!formData.project ||
      !!formData.description ||
      !!formData.sendDate ||
      !!formData.returnDate ||
      !!formData.situation ||
      !!formData.notes);

  const canDelete = !isLoading && !isSearching && !!formData.id;

  const onSearch = useDebouncedCallback(
    async (number: string, type: OrderType) => {
      const currentHash = getHash();
      if (!!number && !!type) {
        const order = await getOrder(number, type);
        if (compareHash(currentHash)) {
          setFormData(order ?? { ...emptyOrder(), number, type });
          setSearching(false);
        }
      } else if (compareHash(currentHash)) {
        setFormData({ ...emptyOrder(''), number, type });
        setSearching(false);
      }
    },
    400
  );

  useEffect(() => {
    if (!canSearch) return;
    setSearching(true);
    const [number, type] = [formData.number, formData.type];
    setHash(number, type);
    setFormData({ ...emptyOrder(''), number, type });
    onSearch(number, type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.number, formData.type]);

  const onSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSave) return;
    setLoading(true);
    const order = await saveOrder(formData);
    if (order) setFormData(order);
    setLoading(false);
  };

  const onClear = () => {
    if (!canClear) return;
    setLoading(true);
    setFormData(emptyOrder(''));
    setLoading(false);
  };

  const onDelete = async () => {
    if (!canDelete) return;
    setLoading(true);
    const result = await deleteOrder(formData.number, formData.type);
    if (result) setFormData(emptyOrder(''));
    setLoading(false);
  };

  return (
    <div className="w-screen min-h-screen bg-neutral-900 flex flex-col items-center text-neutral-100">
      <NavBar />

      <form className="flex flex-col px-5 gap-4 mt-10 w-full max-w-5xl">
        <div className="flex flex-row gap-4">
          <TextInput
            className="flex flex-col gap-3 w-full"
            id="number"
            label="Número"
            disabled={!canSearch}
            value={formData.number}
            onChange={(number) => setFormData({ ...formData, number })}
          />

          <SelectInput
            className="flex flex-col gap-3 w-full"
            id="type"
            label="Tipo"
            options={['SE', 'RM', 'MEMORANDO', 'OUTRO']}
            disabled={!canSearch}
            value={formData.type}
            onChange={(type) => setFormData({ ...formData, type })}
          />

          <span className="w-full" />
        </div>

        <div className="flex flex-row gap-4">
          <DateInput
            className="flex flex-col gap-3 w-full"
            id="arrivalDate"
            label="Data de Chegada"
            disabled={!canType}
            value={formData.arrivalDate}
            onChange={(arrivalDate) =>
              setFormData({ ...formData, arrivalDate })
            }
          />

          <TextInput
            className="flex flex-col gap-3 w-full"
            id="secretary"
            label="Secretaria"
            disabled={!canType}
            value={formData.secretary}
            onChange={(secretary) => setFormData({ ...formData, secretary })}
          />

          <TextInput
            className="flex flex-col gap-3 w-full"
            id="project"
            label="Projeto"
            disabled={!canType}
            value={formData.project}
            onChange={(project) => setFormData({ ...formData, project })}
          />
        </div>

        <div className="flex flex-row gap-4">
          <TextAreaInput
            className="flex flex-col gap-3 w-full"
            id="description"
            label="Descrição"
            rows={4}
            disabled={!canType}
            value={formData.description}
            onChange={(description) =>
              setFormData({ ...formData, description })
            }
          />
        </div>

        <div className="flex flex-row gap-4">
          <DateInput
            className="flex flex-col gap-3 w-full"
            id="sendDate"
            label="Data de Envio ao Financeiro"
            disabled={!canType}
            value={formData.sendDate}
            onChange={(sendDate) => setFormData({ ...formData, sendDate })}
          />

          <DateInput
            className="flex flex-col gap-3 w-full"
            id="returnDate"
            label="Data de Retorno do Financeiro"
            disabled={!canType}
            value={formData.returnDate}
            onChange={(returnDate) => setFormData({ ...formData, returnDate })}
          />

          <TextInput
            className="flex flex-col gap-3 w-full"
            id="situation"
            label="Situação"
            disabled={!canType}
            value={formData.situation}
            onChange={(situation) => setFormData({ ...formData, situation })}
          />
        </div>

        <div className="flex flex-row gap-4">
          <TextAreaInput
            className="flex flex-col gap-3 w-full"
            id="notes"
            label="Observações"
            rows={4}
            disabled={!canType}
            value={formData.notes}
            onChange={(notes) => setFormData({ ...formData, notes })}
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
