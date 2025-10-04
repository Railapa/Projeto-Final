import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Corrija os nomes das classes e dos arquivos aqui
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // E use os nomes corretos aqui também
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'adote-um-amigo-angular';
}