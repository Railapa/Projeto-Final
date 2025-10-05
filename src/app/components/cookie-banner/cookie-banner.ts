import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cookie-banner.html',
  styleUrls: ['./cookie-banner.css']
})
export class CookieBanner implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    // Verifica no localStorage se o consentimento já foi dado
    if (!localStorage.getItem('lgpd_consent')) {
      // Se não foi dado, torna o banner visível
      this.isVisible = true;
    }
  }

  aceitarCookies(): void {
    // Salva o consentimento no localStorage
    localStorage.setItem('lgpd_consent', 'true');
    // Esconde o banner
    this.isVisible = false;
  }
}