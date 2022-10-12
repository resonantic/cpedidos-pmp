export interface CenterProps {
  children: React.ReactNode;
}

export function Center({ children }: CenterProps) {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
}
