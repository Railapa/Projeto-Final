import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Animal, AnimalService } from '../../services/animal';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './animal-detail.html'
})
export class AnimalDetail implements OnInit {
  animal: Animal | undefined;
  imagemPrincipal = '';

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private animalService = inject(AnimalService);
  private authService = inject(AuthService);
  
  currentUserSig = this.authService.currentUserSig;

  ngOnInit(): void {
    const animalId = this.route.snapshot.paramMap.get('id');
    if (animalId) {
      this.animal = this.animalService.getAnimalById(animalId);
      if (this.animal && this.animal.imagens.length > 0) {
        this.imagemPrincipal = this.animal.imagens[0];
      }
    }
  }

  trocarImagemPrincipal(novaImagem: string): void {
    this.imagemPrincipal = novaImagem;
  }

  queroAdotar(): void {
    if (!this.currentUserSig()) {
      this.router.navigate(['/login']);
    } else {
      const assunto = `Interesse em adotar: ${this.animal?.nome}`;
      // PONTO DE VERIFICAÇÃO 1:
      console.log('Navegando com o seguinte assunto:', assunto);
      
      this.router.navigate(['/'], { 
        fragment: 'contato',
        queryParams: { assunto: assunto } 
      });
    }
  }
}