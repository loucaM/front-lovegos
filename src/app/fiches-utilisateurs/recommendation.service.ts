import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';


@Injectable()
export class RecommendationsService implements OnInit {
    userToken: any;
    ngOnInit() {
        this.userToken = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Auth-token': this.userToken
        })
      };
    }

    utilisateurs;


 
url = "http://localhost:3000/lovegos/recommandations";
    constructor(
        private http: HttpClient,
        private tokenService: TokenService

        
    ) {}

    getRecommendations() {

        let observable =  this.http.get<Utilisateur[]>(this.url, this.userToken);
        observable.subscribe( 
            res => {
                    this.utilisateurs = res ;
                    console.log(res);
            }, 
            err => {
                console.log(err)
            }
        );

    }

}