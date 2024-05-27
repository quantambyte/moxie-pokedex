import Link from 'next/link';

import { fetchPokemonList } from '@/services/pokemon';

export default async function Home() {
  const response = await fetchPokemonList();

  return (
    <main className='animate-fadeIn'>
      <div className='container mx-auto p-4'>
        <h1 className='text-4xl font-bold mb-6 text-center text-indigo'>
          Moxie Pokedex
        </h1>
        <ul className='grid grid-cols-3 gap-6'>
          {response.map((pokemon) => (
            <li
              key={pokemon.name}
              className='border p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-indigo hover:text-white text-gray-700 transition-all duration-300'
            >
              <Link
                href={`/pokemon/${pokemon.name}`}
                className='block p-2 text-lg font-medium transition-colors duration-300'
              >
                {pokemon.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
