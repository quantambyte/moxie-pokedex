import Image from 'next/image';

import { fetchPokemonDetails } from '@/services/pokemon';
import Link from 'next/link';
import CardWrapper from '@/components/card-wrapper';

export const metadata = {
  title: 'Pokémon Details',
  description: 'Detailed information about each Pokémon.',
};

export default async function Page({ params }: { params: { name: string } }) {
  const response = await fetchPokemonDetails(params.name);

  return (
    <main className='animate-fadeIn mt-10'>
      <div className='container mx-auto p-4'>
        <header className='relative'>
          <span className='absolute top-1 left-0 w-10 h-10 border-2 rounded-full border-indigo'>
            <Link href='/'>
              <Image src='/back.svg' alt='back' width={40} height={40} />
            </Link>
          </span>
          <h1 className='text-center text-indigo capitalize text-4xl font-bold mb-4'>
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
          <CardWrapper>
            <h2 className='text-2xl font-semibold mb-2'>Stats</h2>
            <ul>
              {response.stats.map((stat) => (
                <li key={stat.stat.name} className='capitalize'>
                  <span className='font-semibold'>{stat.stat.name}:</span>{' '}
                  {stat.base_stat}
                </li>
              ))}
            </ul>
          </CardWrapper>
          <CardWrapper>
            <h2 className='text-2xl font-semibold mb-2'>Abilities</h2>
            <ul>
              {response.abilities.map((ability) => (
                <li key={ability.ability.name} className='capitalize'>
                  {ability.ability.name} {ability.is_hidden ? '(Hidden)' : ''}
                </li>
              ))}
            </ul>
          </CardWrapper>
          <CardWrapper>
            <h2 className='text-2xl font-semibold mb-2'>Types</h2>
            <ul>
              {response.types.map((type) => (
                <li key={type.type.name} className='capitalize'>
                  {type.type.name}
                </li>
              ))}
            </ul>
          </CardWrapper>

          <CardWrapper>
            <h2 className='text-2xl font-semibold mb-2'>Height & Weight</h2>
            <p>
              <span className='font-bold'>Height:</span> {response.height / 10}{' '}
              m
            </p>
            <p>
              <span className='font-bold'>Weight:</span> {response.weight / 10}{' '}
              kg
            </p>
          </CardWrapper>
          <CardWrapper>
            <h2 className='text-2xl font-semibold mb-2'>Forms</h2>
            <ul>
              {response.forms.map((form) => (
                <li key={form.name} className='capitalize'>
                  {form.name}
                </li>
              ))}
            </ul>
          </CardWrapper>

          <CardWrapper>
            <h2 className='text-2xl font-semibold mb-2'>Cries</h2>
            <audio controls>
              <source src={response.cries.latest} type='audio/ogg' />
              Your browser does not support the audio element.
            </audio>
          </CardWrapper>
        </div>
      </div>
    </main>
  );
}
