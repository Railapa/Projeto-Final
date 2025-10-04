import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
// A CORREÇÃO ESTÁ AQUI:
import { Animal, AnimalService } from '../../services/animal';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './animal-detail.html'
})
export class AnimalDetail implements OnInit {
  animal: Animal | undefined;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private animalService = inject(AnimalService);
  private authService = inject(AuthService);
  
  currentUserSig = this.authService.currentUserSig;

  ngOnInit(): void {
    const animalId = this.route.snapshot.paramMap.get('id');
    if (animalId) {
      this.animal = this.animalService.getAnimalById(animalId);
    }
  }

  queroAdotar(): void {
    if (!this.currentUserSig()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/'], { fragment: 'contato' });
    }
  }
}