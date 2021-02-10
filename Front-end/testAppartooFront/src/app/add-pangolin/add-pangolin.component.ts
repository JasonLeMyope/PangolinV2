import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-pangolin',
  templateUrl: './add-pangolin.component.html',
  styleUrls: ['./add-pangolin.component.css']
})
export class AddPangolinComponent implements OnInit {

  liste: any;
  listeAmis: any;
  user: any;

  constructor(private httpClient: HttpClient, private router: Router, private authService: AuthService){}

  //modifiée
  ngOnInit(): void {
      this.httpClient.get('http://localhost:3000/api/pangolin/listPangolins')
        .subscribe(
          (response) => {
            console.log("Pangolins récupérés !");
            this.liste = response;
            this.liste.forEach((element,index) => {
              if(element['idUser'] == this.authService.userId){
                this.user = element;
                this.listeAmis = this.user.amis;
                this.liste.splice(index,1);
              }
            });
            this.liste.forEach((element,index) => {
              this.listeAmis.forEach(elementAmis => {
                if(element['idUser'] == elementAmis['idUser']){
                  this.liste.splice(index,1);
                }
              });
            });
          },
          (error) => {
            console.log('Erreur : ' + console.log(JSON.stringify(error)));
          }
        );
  }

  addPangolin(value){
    var tabFriends = this.user.amis
    tabFriends.push(this.liste[value]);
    const json = {
      userId: this.authService.userId,
      tabFriends: tabFriends
    }
    this.httpClient.put('http://localhost:3000/api/pangolin/editFriends', json)
        .subscribe(
          (response) => {
            console.log("Pangolin ajouté en ami !");
            this.ngOnInit();
          },
          (error) => {
            console.log('Erreur : ' + console.log(JSON.stringify(error)));
          }
        );
  }

}
