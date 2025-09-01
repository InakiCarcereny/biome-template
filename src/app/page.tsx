import { type JSX, useState } from 'react';
import { Button } from '@/app/components/Button';

export default function HomePage(): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div>
      <h1 className='flex items-center gap-0'>Hello Biome!</h1>
      <button onClick={handleOpen} type='button' />
      <Button label='Click me!' onClick={handleOpen} type='button' />
    </div>
  );
}
