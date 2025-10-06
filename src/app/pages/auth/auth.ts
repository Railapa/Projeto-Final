import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router'; // Adicione RouterLink aqui

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // E adicione aqui
  templateUrl: './auth.html'
})
export class Auth {
  loginForm: FormGroup;
  registerForm: FormGroup;
  
  isRegistering = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Cria o formulário de login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    // Cria o formulário de cadastro
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  // Função para lidar com o login
  async handleLogin() {
    this.errorMessage = null;
    if (this.loginForm.valid) {
      try {
        await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
        this.router.navigate(['/']); // Navega para a home após o login
      } catch (error: any) {
        this.errorMessage = this.getFirebaseErrorMessage(error.code);
      }
    }
  }

  // Função para lidar com o cadastro
  async handleRegister() {
    this.errorMessage = null;
    this.successMessage = null;

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    if (this.registerForm.valid) {
      try {
        await this.authService.register(this.registerForm.value.email, this.registerForm.value.password);
        this.successMessage = 'Conta criada com sucesso! Você será redirecionado para o login.';
        setTimeout(() => {
          this.toggleForm(); // Volta para o formulário de login
          this.successMessage = null;
        }, 3000);
      } catch (error: any) {
        this.errorMessage = this.getFirebaseErrorMessage(error.code);
      }
    }
  }

  // Função para alternar entre os formulários de login e cadastro
  toggleForm() {
    this.isRegistering = !this.isRegistering;
    this.errorMessage = null;
    this.successMessage = null;
    this.loginForm.reset();
    this.registerForm.reset();
  }

  // Função para traduzir os erros do Firebase (igual à do seu JS original)
  getFirebaseErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Este e-mail já está cadastrado.';
      case 'auth/invalid-email':
        return 'O formato do e-mail é inválido.';
      case 'auth/weak-password':
        return 'A senha precisa ter no mínimo 6 caracteres.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'E-mail ou senha incorretos.';
      default:
        return 'E-mail ou senha incorretos.';
    }
  }
}