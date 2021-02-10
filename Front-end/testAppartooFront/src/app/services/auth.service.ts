import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

    isAuth = false;
    userId = undefined;
  
    constructor(private httpClient: HttpClient, private router: Router){}

    signup(json){
        console.log(json);
        this.httpClient
            .post('http://localhost:3000/api/auth/signup', json)
            .subscribe(
                () => {
                    console.log('Enregistrement terminé !');
                    this.router.navigate(['']);
                },
                (error) => {
                    console.log('Erreur : ' + console.log(JSON.stringify(error)));
                }
            );
    }

    login(json) {
        console.log(json);
        this.httpClient
            .post('http://localhost:3000/api/auth/login', json)
            .subscribe(
                (response) => {
                    console.log('Connecté !');
                    this.isAuth = true
                    this.userId = response['userId'];
                    this.router.navigate(['']);
                },
                (error) => {
                    console.log('Erreur : ' + console.log(JSON.stringify(error)));
                }
            );
    }
  
    logout() {
        this.isAuth = false;
        this.userId = undefined;
    }
  }