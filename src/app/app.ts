import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CookieBanner } from './components/cookie-banner/cookie-banner'; // 1. Importe aqui

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    CookieBanner // 2. Adicione na lista
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'adote-um-amigo-angular';
}