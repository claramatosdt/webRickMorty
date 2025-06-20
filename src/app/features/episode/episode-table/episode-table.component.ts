import { Component, Input } from '@angular/core';
import { IEpisode } from '../models/episode.interface';
import { RickMortyService } from '../../../core/services/rick-morty.service';
import { IApiResponse } from '../../../shared/models/api-response.interface';

@Component({
  selector: 'app-episode-table',
  templateUrl: './episode-table.component.html',
  styleUrl: './episode-table.component.css'
})
export class EpisodeTableComponent {
  @Input() episodes: IEpisode[] = [];
  @Input() nextPage!: string | null;
  @Input() prevPage!: string | null;
  loading: boolean = false;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
  }

  onNextPage(): void {
    this.loading = true;
    if(this.nextPage) {
      this.rickMortyService.getNextEpisodes(this.nextPage).subscribe((data: IApiResponse<IEpisode>) => {
        this.episodes = data.results;
        this.nextPage = data.info.next;
        this.prevPage = data.info.prev;
        this.loading = false;
      });
    }
  }

  onPrevPage(): void {
    this.loading = true;
    if(this.prevPage) {
      this.rickMortyService.getNextEpisodes(this.prevPage).subscribe((data: IApiResponse<IEpisode>) => {
        this.episodes = data.results;
        this.nextPage = data.info.next;
        this.prevPage = data.info.prev;
        this.loading = false;
      });
    }
  }

}
