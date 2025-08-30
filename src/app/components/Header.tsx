import type { JSX } from 'react';

interface HeaderProps {
  label: string;
}

export function Header({ label }: HeaderProps): JSX.Element {
  return (
    <header>
      <h1>{label}</h1>
    </header>
  );
}
