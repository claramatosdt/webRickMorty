import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Serviço responsável por gerenciar a sessão do usuário.
 * Fornece métodos para armazenar e limpar os dados do usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    // Ao iniciar o service ele verifica se tem algum user salvo e atualiza o subject
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    this.userSubject.next(user);
  }

    /**
   * Armazena os dados do usuário.
   * @param user Os dados do usuário.
   */
    setUser(user: any): void {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
    }

    /**
     * Limpa os dados do usuário.
     */
    clearUser(): void {
      localStorage.removeItem('user');  // Remove apenas o item 'user' da localStorage
      this.userSubject.next(null);
    }
}
