import { Eraser, MagnifyingGlass } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { DateInput } from '../../components/forms/DateInput';
import { Button } from '../../components/buttons/Button';

export function SearchForm() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string>('sendDate');
  const [filterValue, setFilterValue] = useState<string>('');

  const canSearch = !isLoading;

  const canType = !isLoading;

  const canClear = !isLoading && (filterType !== 'sendDate' || !!filterValue);

  const onSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSearch) return;
    setLoading(true);
    // TODO: search
    setLoading(false);
  };

  const onClear = async () => {
    if (!canClear) return;
    setLoading(true);
    setFilterType('sendDate');
    setFilterValue('');
    setLoading(false);
  };

  return (
    <form onSubmit={onSearch} className="flex flex-row gap-4">
      <DateInput
        className="flex flex-col gap-3 w-full"
        id="sendDate"
        label="Data de Envio ao Financeiro"
        disabled={!canType}
        value={filterValue}
        onChange={setFilterValue}
      />

      <div className="flex flex-row items-end gap-4 w-full">
        <Button type="submit" intent="success" disabled={!canSearch}>
          <MagnifyingGlass className="w-5 h-5" />
          <span>Buscar</span>
        </Button>

        <Button intent="primary" disabled={!canClear} onClick={onClear}>
          <Eraser className="w-5 h-5" />
          <span>Limpar</span>
        </Button>
      </div>
    </form>
  );
}
