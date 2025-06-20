import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacter } from '../models/character.interface';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() character!: ICharacter;

  constructor(private characterService: CharacterService, private router: Router){}

  // Método para navegar para os detalhes do personagem e armazenar os detalhes no serviço
  navigateToDetails(character: ICharacter): void {
    this.characterService.setCharacterDetails(character); // Armazena os detalhes do personagem
    this.router.navigate(['/characters', character.id]); // Navega para a página de detalhes do personagem
  }

}
