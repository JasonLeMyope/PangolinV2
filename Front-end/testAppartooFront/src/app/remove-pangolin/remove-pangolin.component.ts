import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-remove-pangolin',
  templateUrl: './remove-pangolin.component.html',
  styleUrls: ['./remove-pangolin.component.css']
})
export class RemovePangolinComponent implements OnInit {

  liste: any;
  user: any;

  constructor(private httpClient: HttpClient, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    const link = 'http://localhost:3000/api/pangolin/showInfos/';
      this.httpClient.get(link.concat(this.authService.userId))
        .subscribe(
          (response) => {
            console.log("Infos d'utilisateur récupérées !");
            this.user = response;
            this.liste = this.user.amis
          },
          (error) => {
            console.log('Erreur : ' + console.log(JSON.stringify(error)));
          }
        );
  }

  removePangolin(value){
    var tabFriends = this.liste
    tabFriends.forEach((element,index) => {
      if(element['idUser'] == tabFriends[value]['idUser']){
        tabFriends.splice(index,1);
      }
    });
    console.log(tabFriends)
    const json = {
      userId: this.authService.userId,
      tabFriends: tabFriends
    }
    this.httpClient.put('http://localhost:3000/api/pangolin/editFriends', json)
        .subscribe(
          (response) => {
            console.log("Pangolin retiré des amis !");
            this.ngOnInit();
          },
          (error) => {
            console.log('Erreur : ' + console.log(JSON.stringify(error)));
          }
        );
  }

}
