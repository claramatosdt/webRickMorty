import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';
import { ICharacter } from '../../features/character/models/character.interface';
import { IApiResponse } from '../../shared/models/api-response.interface';
import { ISearchParams } from '../../shared/models/search-params.interface';
import { IEpisode } from '../../features/episode/models/episode.interface';
/**
 * Serviço responsável por interagir com a API do Rick and Morty.
 * Fornece métodos para obter informações sobre personagens e episódios.
 *
 * @author Clara Duarte
 */
@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

    /**
   * Obtém todos os personagens com base nos parâmetros de pesquisa fornecidos.
   *
   * @param params - Objeto contendo os parâmetros de pesquisa.
   * @returns Observable<IApiResponse<ICharacter>> - Um observable que emite a resposta da API contendo a lista de personagens.
   */
  getAllCharacters(params: ISearchParams): Observable<IApiResponse<ICharacter>> {
    let httpParams = new HttpParams();
    for(const key in params) {
      // Se o valor do parâmetro não for vazio, adicionamos ao HttpParams
      if(params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    //Faz a requisição HTTP GET com os parâmetros (se houver)
    return this.http.get<IApiResponse<ICharacter>>(`${this.baseUrl}/character/`, {params: httpParams}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if(error.status === 404) {
          errorMessage = 'Nenhum dado foi encontrado';
        } else {
          errorMessage = 'Erro não esperado';
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }


    /**
   * Obtém todos os episódios, com opção de filtrar por ID específico.
   *
   * @param id - ID do episódio (opcional).
   * @returns Observable<IApiResponse<IEpisode>> - Um observable que emite a resposta da API contendo a lista de episódios.
   */
  getAllEpisodes(id?: string): Observable<IApiResponse<IEpisode>> {
    return this.http.get<IApiResponse<IEpisode>>(`${this.baseUrl}/episode/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if(error.status === 404) {
          errorMessage = 'Nenhum dado foi encontrado';
        } else {
          errorMessage = 'Erro não esperado';
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }

    /**
   * Obtém os próximos episódios com base na URL fornecida.
   *
   * @param nextUrl - URL da próxima página de episódios.
   * @returns Observable<IApiResponse<IEpisode>> - Um observable que emite a resposta da API contendo a lista de episódios.
   */
  getNextEpisodes(nextUrl: string): Observable<IApiResponse<IEpisode>>  {
    return this.http.get<IApiResponse<IEpisode>>(nextUrl);
  }

    /**
   * Obtém os episódios anteriores com base na URL fornecida.
   *
   * @param prevUrl - URL da página anterior de episódios.
   * @returns Observable<IApiResponse<IEpisode>> - Um observable que emite a resposta da API contendo a lista de episódios.
   */
  getPrevEpisodes(prevUrl: string): Observable<IApiResponse<IEpisode>>  {
    return this.http.get<IApiResponse<IEpisode>>(prevUrl);
  }

}
