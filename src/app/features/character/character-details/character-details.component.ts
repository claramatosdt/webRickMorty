import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICharacter } from '../models/character.interface';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit {
  character!: ICharacter | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService) {}

  ngOnInit(): void {
    // Assina o Observable do serviço para obter os detalhes do personagem
    this.characterService.characterDetails$.subscribe((character)=> {
      this.character = character;
    });
  }

  backToList(): void {
    this.characterService.clearCharacterDetails();
    this.router.navigate(['/characters']);
  }
}
