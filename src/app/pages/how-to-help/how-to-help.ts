import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-to-help',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './how-to-help.html'
})
export class HowToHelp {
  // Propriedades do formulário de voluntário
  voluntarioForm: FormGroup;
  feedbackVoluntario = { tipo: '', mensagem: '' };
  enviandoVoluntario = false;

  // --- CÓDIGO NOVO ADICIONADO AQUI ---
  textoBotaoCopiar = 'Copiar';
  // ------------------------------------

  constructor(private fb: FormBuilder) {
    this.voluntarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required],
      lgpd: [false, Validators.requiredTrue]
    });
  }

  // --- CÓDIGO NOVO ADICIONADO AQUI ---
  copiarPix(chave: string): void {
    navigator.clipboard.writeText(chave).then(() => {
      this.textoBotaoCopiar = 'Copiado!';
      setTimeout(() => {
        this.textoBotaoCopiar = 'Copiar';
      }, 2000);
    }).catch(err => {
      console.error('Erro ao copiar a chave PIX:', err);
    });
  }
  // ------------------------------------

  async handleVoluntarioSubmit(): Promise<void> {
    if (this.voluntarioForm.invalid) {
      return;
    }

    this.enviandoVoluntario = true;
    this.feedbackVoluntario = { tipo: '', mensagem: '' };

    try {
      const formData = new FormData();
      Object.keys(this.voluntarioForm.value).forEach(key => {
        formData.append(key, this.voluntarioForm.value[key]);
      });

      const response = await fetch('https://formspree.io/f/manpjlwe', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.feedbackVoluntario = { tipo: 'sucesso', mensagem: 'Candidatura enviada com sucesso! Entraremos em contato em breve.' };
        this.voluntarioForm.reset();
      } else {
        throw new Error('Houve um problema ao enviar o formulário.');
      }
    } catch (error) {
      this.feedbackVoluntario = { tipo: 'erro', mensagem: 'Ocorreu um erro ao enviar a candidatura. Tente novamente.' };
    } finally {
      this.enviandoVoluntario = false;
      setTimeout(() => this.feedbackVoluntario = { tipo: '', mensagem: '' }, 5000);
    }
  }
}