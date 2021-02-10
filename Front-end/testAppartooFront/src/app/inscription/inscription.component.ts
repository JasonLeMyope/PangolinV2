import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onSignUp(form: NgForm) {
    var json = {
      login: form.value['login'],
      password: form.value['password'],
      nom: form.value['nom'],
      age: form.value['age'],
      famille: form.value['famille'],
      race: form.value['race'],
      nourriture: form.value['nourriture']
    }
    this.authService.signup(json);
  }

}
