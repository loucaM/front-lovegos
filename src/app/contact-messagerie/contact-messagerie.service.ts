import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';


@Injectable()
export class ContactMessagerieService {
    userToken: any;

    conversations: any;


    url = "http://localhost:3000/lovegos/conversation/:42";
    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) { }

    getConversations() {
        console.log(this.tokenService.headerObject());
        let observable = this.http.get<any>(this.url, { headers: this.tokenService.headerObject() });
        observable.subscribe(
            res => {
                this.conversations = res;
            },
            err => {
                console.log(err)
            }
        );

    }

}