import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Importe o RouterLink

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink], // 2. Adicione o RouterLink aqui na lista
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {

}