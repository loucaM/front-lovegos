import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';
import { Urls } from '../urls';


@Injectable()
export class RecommendationsService {
    userToken: any;

    utilisateurs: any;

    getUtilisateur() {
        return this.utilisateurs.utilisateurs;

    }

    url = Urls.server + "lovegos/recommandations";
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
            },
            err => {
                console.log(err)
            }
        );

    }

}