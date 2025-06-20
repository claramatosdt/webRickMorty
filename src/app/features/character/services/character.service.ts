import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICharacter } from '../models/character.interface';
/*
 * serviço para controlar o estado atual do personagem
*/
@Injectable()
export class CharacterService {
  // BehaviorSubject para armazenar os detalhes do personagem
  private characterDetails = new BehaviorSubject<ICharacter | undefined>(undefined);
  // Observable para fornecer acesso aos detalhes do personagem
  characterDetails$ = this.characterDetails.asObservable();

  constructor() { }

  // Método para definir os detalhes do personagem
  setCharacterDetails(character: ICharacter): void {
    this.characterDetails.next(character);
  }

  // Método para limpar os detalhes do personagem
  clearCharacterDetails(): void {
    this.characterDetails.next(undefined);
  }

}
