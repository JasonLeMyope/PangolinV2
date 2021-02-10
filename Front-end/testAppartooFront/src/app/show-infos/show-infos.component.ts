import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-infos',
  templateUrl: './show-infos.component.html',
  styleUrls: ['./show-infos.component.css']
})
export class ShowInfosComponent implements OnInit {

  nom: String;
  age: Number;
  famille: String;
  race: String;
  nourriture: String;

  constructor(private httpClient: HttpClient, private router: Router, private authService: AuthService){}

  ngOnInit() {
    const link = 'http://localhost:3000/api/pangolin/showInfos/';
      this.httpClient.get(link.concat(this.authService.userId))
        .subscribe(
          (response) => {
            console.log("Infos d'utilisateur récupérées !");
            this.nom = response['nom'];
            this.age = response['age'];
            this.famille = response['famille'];
            this.race = response['race'];
            this.nourriture = response['nourriture'];
          },
          (error) => {
            console.log('Erreur : ' + console.log(JSON.stringify(error)));
          }
        );
  }

  onEdit(form: NgForm){
    var nom = form.value['nom'];
    var age = form.value['age'];
    var famille = form.value['famille'];
    var race = form.value['race'];
    var nourriture = form.value['nourriture'];
    if(nom == ""){ nom = this.nom }
    if(age == ""){ age = this.age }
    if(famille == ""){ famille = this.famille }
    if(race == ""){ race = this.race }
    if(nourriture == ""){ nourriture = this.nourriture }
    var json = {
      userId: this.authService.userId,
      nom: nom,
      age: age,
      famille: famille,
      race: race,
      nourriture: nourriture
    }
    this.httpClient.put('http://localhost:3000/api/pangolin/editInfos', json)
      .subscribe(
        (response) => {
          console.log("Données modifiées");
          this.router.navigate(['']);
        }
      ),
      (error) => {
        console.log('Erreur : ' + console.log(JSON.stringify(error)));
      }
  }
}
