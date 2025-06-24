import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username && this.password) {
      console.log('Nom d\'utilisateur:', this.username);
      console.log('Mot de passe:', this.password);
      alert('Connexion réussie (démo)');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}

