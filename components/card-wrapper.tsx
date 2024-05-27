import { ReactNode } from 'react';

export default function CardWrapper({ children }: { children: ReactNode }) {
  return (
    <div className='border p-6 rounded-lg shadow-md hover:shadow-lg'>
      {children}
    </div>
  );
}
