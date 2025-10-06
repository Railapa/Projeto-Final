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
  private authService = inject(AuthService);
  currentUserSig = this.authService.currentUserSig;

  isMenuMobileAberto = false;

  logout(): void {
    // Adicionamos a confirmação aqui
    if (confirm('Você tem certeza que deseja sair da sua conta?')) {
      this.authService.logout();
      this.isMenuMobileAberto = false;
    }
  }

  toggleMenuMobile(): void {
    this.isMenuMobileAberto = !this.isMenuMobileAberto;
  }
}