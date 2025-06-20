import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeTableComponent } from './episode-table/episode-table.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    EpisodeListComponent,
    EpisodeTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EpisodeModule { }
