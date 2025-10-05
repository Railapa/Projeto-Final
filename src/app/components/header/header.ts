import { Component, inject } from '@angular/core';
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
  // Injeta o AuthService para saber o status do login
  private authService = inject(AuthService);
  // Pega o "sinal" do usuário logado do serviço
  currentUserSig = this.authService.currentUserSig;

  // Variável para controlar o estado do menu mobile
  isMenuMobileAberto = false;

  // Função para fazer logout
  logout(): void {
    this.authService.logout();
    this.isMenuMobileAberto = false; // Garante que o menu feche ao fazer logout
  }

  // Função para abrir/fechar o menu mobile
  toggleMenuMobile(): void {
    this.isMenuMobileAberto = !this.isMenuMobileAberto;
  }
}