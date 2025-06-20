import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ICharacter } from '../models/character.interface';
import { ISearchParams } from '../../../shared/models/search-params.interface';
import { RickMortyService } from '../../../core/services/rick-morty.service';
import { IApiResponse } from '../../../shared/models/api-response.interface';



@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  currentList: string = 'Characters';
  characters: ICharacter[] = [];
  page: number = 1;
  searchParams: ISearchParams = {};
  hasMorePages: boolean = true;

  constructor(private rickMortyService: RickMortyService) {
  }

  ngOnInit(): void { }

  /**
 *
 * @param data Dados da resposta da API, contendo a lista de personagens.
 */
  handleSearchSuccess(data: IApiResponse<ICharacter>): void {
    this.characters = data.results;
    this.page = 1;
  
    this.hasMorePages = data.info && data.info.next !== null;
  }

  /**
   * A
   *
   * @param params 
   */
  handleSearchParams(params: ISearchParams): void {
    this.searchParams = params;
    this.page = 1;
    this.loadCharacters();
  }

  /**
 * 
 */
  loadCharacters(): void {
    if (!this.hasMorePages) {
      return; 
    }

    const params = { ...this.searchParams, page: this.page };

    this.rickMortyService.getAllCharacters(params).subscribe({
      next: (data: IApiResponse<ICharacter>) => {
        if (this.page === 1) {
          this.characters = data.results;
        } else {
          this.characters = [...this.characters, ...data.results];
        }
        this.hasMorePages = data.info && data.info.next !== null;
      }
    });
  }

  /**
 * 
 */
  onScroll(): void {
    this.page++;
    this.loadCharacters();
  }

}
