import { Injectable, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 'currentUserSig' é um "sinal" que vai nos dizer quem está logado.
  // Ele pode ser nulo (ninguém logado) ou conter os dados do usuário.
  currentUserSig = signal<User | null | undefined>(undefined);

  constructor(private auth: Auth) {
    // Fica "ouvindo" o Firebase para saber se o status do usuário mudou (entrou/saiu)
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSig.set(user);
    });
  }

  // Método para fazer login
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Método para registrar um novo usuário
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Método para fazer logout
  logout() {
    return signOut(this.auth);
  }
}