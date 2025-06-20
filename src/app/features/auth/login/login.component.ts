import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../../../core/services/session.service';
import { Router } from '@angular/router';
/**
 * Componente de login da aplicação.
 * Permite que o usuário se autentique na aplicação usando um formulário de login.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, // Serviço de autenticação
    private sessionService: SessionService,  // Serviço de gerenciamento de sessão
    private router: Router

  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
 * Inicializa o formulário de login.
 * Cria um grupo de formulário com os campos de email e senha, com validações.
 */
  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
 * Envia o formulário de login.
 * Verifica se o formulário é válido, realiza a autenticação do usuário e atualiza a sessão.
 */
  submitForm(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(user => {
        if (user) {
          this.sessionService.setUser(user);
          this.loginError = false;
          this.router.navigate(['/profile']);
        } else {
          this.loginError = true;
        }
      });
    }
    this.loginForm.reset();
  }

}
