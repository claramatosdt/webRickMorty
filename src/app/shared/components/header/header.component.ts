import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../core/services/session.service';

/**
 * Componente de cabeçalho da aplicação.
 * Exibe informações do usuário logado e fornece opção de logout.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user: any = null;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.sessionService.user$.subscribe(user => {
      this.user = user;
    })
  }

  logout(): void {
    this.sessionService.clearUser();
    this.router.navigate(['/characters']);
  }

  /**
 * Verifica se o usuário está logado.
 *
 * @returns true se o usuário estiver logado, false caso contrário.
 */
  get isLoggedIn(): boolean {
    return this.user !== null;
  }

}
