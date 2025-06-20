/**
 * Interface que representa um personagem da aplicação.
 */
export interface ICharacter {
  id: number;
  name: string;
  status: 'alive' | 'dead' | 'unknown';
  species: string;
  gender: 'female' | 'male' | 'genderless' | 'unknown';
  image: string;
}
