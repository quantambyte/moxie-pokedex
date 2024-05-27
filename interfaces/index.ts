export interface IPokemon {
  name: string;
  url: string;
}

interface INameUrlPair {
  name: string;
  url: string;
}

interface IAbility {
  ability: INameUrlPair;
  is_hidden: boolean;
  slot: number;
}

interface ICry {
  latest: string;
  legacy: string;
}

interface IForm {
  name: string;
  url: string;
}

interface IGameIndex {
  game_index: number;
  version: INameUrlPair;
}

interface IMoveDetail {
  level_learned_at: number;
  move_learn_method: INameUrlPair;
  version_group: INameUrlPair;
}

interface IMove {
  move: INameUrlPair;
  version_group_details: IMoveDetail[];
}

interface ISpecies {
  name: string;
  url: string;
}

interface IOtherSprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface ISprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: IOtherSprites;
    home: IOtherSprites;
    'official-artwork': {
      front_default: string | null;
    };
    showdown: IOtherSprites;
  };
  versions: {
    [generation: string]: {
      [version: string]: string | null;
    };
  };
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: INameUrlPair;
}

interface IType {
  slot: number;
  type: INameUrlPair;
}

export interface IPokemonDetails {
  abilities: IAbility[];
  base_experience: number;
  cries: ICry;
  forms: IForm[];
  game_indices: IGameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: ISpecies;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  weight: number;
}
