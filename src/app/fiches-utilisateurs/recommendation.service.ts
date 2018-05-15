import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';


@Injectable()
export class RecommendationsService {
    userToken: any;

    utilisateurs: any;

    getUtilisateur() {
        console.log("Utilisateur Service utilisateurs ->");
        console.log(this.utilisateurs)
        console.log("Utilisateur Service, utilisateurs.utilisateurs ->");
        console.log(this.utilisateurs.utilisateurs)
        return this.utilisateurs.utilisateurs;

    }

    url = "http://localhost:3000/lovegos/recommandations";
    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) { }

    getRecommendations() {
        console.log(this.tokenService.headerObject());
        let observable = this.http.get<Utilisateur[]>(this.url, { headers: this.tokenService.headerObject() });
        observable.subscribe(
            res => {
                this.utilisateurs = res;
                console.log("res observalbe");
                console.log(res) ;
                console.log("observable utilisaeurs");
                console.log(this.utilisateurs) ;
            },
            err => {
                console.log(err)
            }
        );

    }

}