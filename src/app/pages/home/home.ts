import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimalService } from '../../services/animal'; // <-- 1. CORREÇÃO AQUI
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './home.html'
})
export class Home implements OnInit, AfterViewInit {
  // --- Código do carrossel ---
  animais: any[] = [];
  indiceAtual = 0;
  transformValue = 'translateX(0px)';
  mostrarBotaoAnterior = false;
  mostrarBotaoProximo = true;
  @ViewChild('trilha') trilha!: ElementRef<HTMLUListElement>;
  @ViewChild('card') card!: ElementRef<HTMLLIElement>; // <-- 2. CORREÇÃO AQUI (era ViewCHild)
  
  // --- Código para o formulário de contato ---
  contatoForm: FormGroup;
  feedbackContato = { tipo: '', mensagem: '' };
  enviandoContato = false;

  constructor(
    private animalService: AnimalService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      assunto: [''],
      mensagem: ['', Validators.required],
      lgpd: [false, Validators.requiredTrue]
    });
  }

  // --- Métodos do carrossel ---
  ngOnInit(): void {
    this.animais = this.animalService.getAnimals();
  }

  ngAfterViewInit(): void {
    this.atualizarBotoes();
    this.cdr.detectChanges();
  }
  
  @HostListener('window:resize')
  onResize() {
    this.moverParaSlide(0);
  }

  proximoSlide(): void {
    this.moverParaSlide(this.indiceAtual + 1);
  }

  slideAnterior(): void {
    this.moverParaSlide(this.indiceAtual - 1);
  }

  private moverParaSlide(novoIndice: number): void {
    if (!this.trilha || !this.card) return;
    const slideLargura = this.card.nativeElement.offsetWidth;
    const maxIndice = this.animais.length - this.getNumSlidesVisiveis();
    this.indiceAtual = Math.max(0, Math.min(novoIndice, maxIndice));
    this.transformValue = `translateX(-${slideLargura * this.indiceAtual}px)`;
    this.atualizarBotoes();
  }
  
  private atualizarBotoes(): void {
    if (!this.trilha) {
      this.mostrarBotaoAnterior = false;
      this.mostrarBotaoProximo = false;
      return;
    }
    const maxIndice = this.animais.length - this.getNumSlidesVisiveis();
    this.mostrarBotaoAnterior = this.indiceAtual > 0;
    this.mostrarBotaoProximo = this.indiceAtual < maxIndice;
  }

  private getNumSlidesVisiveis(): number {
    if (!this.trilha || !this.card) return 1;
    const trilhaLargura = this.trilha.nativeElement.offsetWidth;
    const slideLargura = this.card.nativeElement.offsetWidth;
    return slideLargura > 0 ? Math.round(trilhaLargura / slideLargura) : 1;
  }

  // --- Método para enviar o formulário de contato ---
  async handleContatoSubmit(): Promise<void> {
    if (this.contatoForm.invalid) {
      return;
    }

    this.enviandoContato = true;
    this.feedbackContato = { tipo: '', mensagem: '' };

    try {
      const formData = new FormData();
      Object.keys(this.contatoForm.value).forEach(key => {
        formData.append(key, this.contatoForm.value[key]);
      });

      const response = await fetch('https://formspree.io/f/mdkwzpna', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.feedbackContato = { tipo: 'sucesso', mensagem: 'Mensagem enviada com sucesso! Agradecemos o contato.' };
        this.contatoForm.reset();
      } else {
        throw new Error('Houve um problema ao enviar o formulário.');
      }
    } catch (error) {
      this.feedbackContato = { tipo: 'erro', mensagem: 'Ocorreu um erro ao enviar a mensagem. Tente novamente.' };
    } finally {
      this.enviandoContato = false;
      setTimeout(() => this.feedbackContato = { tipo: '', mensagem: '' }, 5000);
    }
  }
}