'use server';

import { BASE_URL } from '@/constants';
import { IPokemon, IPokemonDetails } from '@/interfaces';

export const fetchPokemonList = async (limit: number = 12) => {
  const url = `${BASE_URL}?limit=${limit}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results as IPokemon[];
};

export const fetchPokemonDetails = async (name: string) => {
  const url = `${BASE_URL}/${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data as IPokemonDetails;
};
