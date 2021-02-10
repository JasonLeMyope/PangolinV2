import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-user-friend',
  templateUrl: './add-user-friend.component.html',
  styleUrls: ['./add-user-friend.component.css']
})
export class AddUserFriendComponent implements OnInit {

  ami: any;
  user : any;

  constructor(private httpClient: HttpClient, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
  }

  onCreateFriend(form: NgForm){
    var json = {
      login: form.value['login'],
      password: form.value['password'],
      nom: form.value['nom'],
      age: form.value['age'],
      famille: form.value['famille'],
      race: form.value['race'],
      nourriture: form.value['nourriture']
    }
    this.httpClient
      .post('http://localhost:3000/api/auth/signup', json)
      .subscribe(
        (response) => {
          console.log('Enregistrement terminé !');
          this.ami = response;
          const link = 'http://localhost:3000/api/pangolin/showInfos/';
          this.httpClient
            .get(link.concat(this.ami._id))
            .subscribe(
              (response) => {
                this.ami = response
                this.httpClient
                  .get(link.concat(this.authService.userId))
                  .subscribe(
                    (response) => {
                      this.user = response;
                      var tabFriends = this.user.amis;
                      tabFriends.push(this.ami);
                      var jsonUser = {
                        userId: this.authService.userId,
                        tabFriends: tabFriends
                      }
                      this.httpClient
                        .put('http://localhost:3000/api/pangolin/editFriends', jsonUser)
                        .subscribe(
                          (response) => {
                            console.log("Pangolin ajouté en ami !");
                            this.router.navigate(['']);
                          },
                          (error) => {
                            console.log('Erreur : ' + console.log(JSON.stringify(error)));
                          }
                        );
                    },
                    (error) => {
                      console.log('Erreur : ' + console.log(JSON.stringify(error)));
                    }
                  )
              },
              (error) => {
                console.log('Erreur : ' + console.log(JSON.stringify(error)));
              }
            );
        },
        (error) => {
          console.log('Erreur : ' + console.log(JSON.stringify(error)));
        }
      );
  }

}
