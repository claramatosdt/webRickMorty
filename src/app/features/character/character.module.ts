import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterService } from './services/character.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterDetailsComponent,
    CharacterListComponent,
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    SharedModule
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterModule { }
