import { NavBar } from '../../components/layout/NavBar';
import { SearchForm } from './SearchForm';

export function Reports() {
  return (
    <div className="w-screen min-h-screen bg-neutral-900 flex flex-col items-center text-neutral-100">
      <NavBar />

      <div className="flex flex-col px-5 gap-4 mt-10 w-full max-w-5xl">
        <SearchForm />
      </div>
    </div>
  );
}
