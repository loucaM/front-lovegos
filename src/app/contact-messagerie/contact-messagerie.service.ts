import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';


@Injectable()
export class ContactMessagerieService {
    userToken: any;
    conversations: any;

    url = "http://localhost:3000/lovegos/conversations";
    urlNewConversation = "http://localhost:3000/lovegos/new-conversation";
    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) { }

    getConversations() {
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

    createConversation(id: number []) {
        let observable =  this.http.post<any>(this.urlNewConversation, id,  { headers: this.tokenService.headerObject() });
        observable.subscribe( 
            res => {
                console.log( res);
                if (res.status === "OK"){
                }
                else {
                }
            }, 
            err => {
                console.log(err)
            }
        );
    }
}
    

      
