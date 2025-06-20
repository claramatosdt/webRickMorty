import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

/**
 * Serviço de autenticação da aplicação.
 * Fornece métodos para realizar o login do usuário.
 */
@Injectable()
export class AuthService {
  private baseUrl = environment.serverUrl;

  constructor(private http: HttpClient) { }

    /**
   * Método de login que verifica se as credenciais são válidas e retorna os dados do usuário.
   *
   * @param email O email do usuário.
   * @param password A senha do usuário.
   * @returns Um Observable que emite os dados do usuário se o login for bem-sucedido, ou `null` caso contrário.
   */
  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}?email=${email}&password=${password}`).pipe(
      map(users => users.length > 0 ? users[0] : null),
      catchError(error => {
        console.error('Login error', error);
        return of(null); // Retorna um Observable com valor null em caso de erro
      })
    );

  }
}
