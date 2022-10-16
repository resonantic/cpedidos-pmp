import { CircleNotch } from 'phosphor-react';

export function Loading() {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col items-center justify-center text-neutral-100">
      <CircleNotch weight="bold" className="w-12 h-12 animate-spin" />
    </div>
  );
}
