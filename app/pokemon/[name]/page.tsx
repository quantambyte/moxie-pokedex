import Image from 'next/image';

import { fetchPokemonDetails } from '@/services/pokemon';
import Link from 'next/link';

export const metadata = {
  title: 'Pokémon Details',
  description: 'Detailed information about each Pokémon.',
};

export default async function Page({ params }: { params: { name: string } }) {
  const response = await fetchPokemonDetails(params.name);

  return (
    <main className='animate-fadeIn'>
      <div className='container mx-auto p-4'>
        <header className='flex items-center w-full lg:w-[60%] 2xl:w-[50%] justify-between text-4xl font-bold mb-4'>
          <Link
            href='/'
            className='text-sm font-normal hover:underline transition-all'
          >
            Back to HOME
          </Link>
          <h1 className='text-center text-indigo capitalize'>
            {response.name}
          </h1>
        </header>
        <div className='flex justify-center mb-6'>
          <Image
            src={response.sprites.front_default || ''}
            alt={response.name}
            width={200}
            height={200}
            className='rounded-full shadow-md hover:shadow-lg transition-all'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg'>
            <h2 className='text-2xl font-semibold mb-2'>Stats</h2>
            <ul>
              {response.stats.map((stat) => (
                <li key={stat.stat.name} className='capitalize'>
                  <span className='font-semibold'>{stat.stat.name}:</span>{' '}
                  {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg'>
            <h2 className='text-2xl font-semibold mb-2'>Abilities</h2>
            <ul>
              {response.abilities.map((ability) => (
                <li key={ability.ability.name} className='capitalize'>
                  {ability.ability.name} {ability.is_hidden ? '(Hidden)' : ''}
                </li>
              ))}
            </ul>
          </div>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg'>
            <h2 className='text-2xl font-semibold mb-2'>Types</h2>
            <ul>
              {response.types.map((type) => (
                <li key={type.type.name} className='capitalize'>
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg'>
            <h2 className='text-2xl font-semibold mb-2'>Height & Weight</h2>
            <p>
              <span className='font-bold'>Height:</span> {response.height / 10}{' '}
              m
            </p>
            <p>
              <span className='font-bold'>Weight:</span> {response.weight / 10}{' '}
              kg
            </p>
          </div>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg'>
            <h2 className='text-2xl font-semibold mb-2'>Forms</h2>
            <ul>
              {response.forms.map((form) => (
                <li key={form.name} className='capitalize'>
                  {form.name}
                </li>
              ))}
            </ul>
          </div>
          <div className='border p-4 rounded-lg shadow-md hover:shadow-lg'>
            <h2 className='text-2xl font-semibold mb-2'>Cries</h2>
            <audio controls>
              <source src={response.cries.latest} type='audio/ogg' />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </main>
  );
}
