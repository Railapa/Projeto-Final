import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html'
})
export class Header {
  // Injeta o AuthService e cria um "sinal" para o usuário atual
  private authService = inject(AuthService);
  currentUserSig = this.authService.currentUserSig;

  // Função para fazer logout
  logout(): void {
    this.authService.logout();
  }
}