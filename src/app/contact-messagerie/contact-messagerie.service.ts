import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';
import { Urls } from '../urls';
import { Router } from '@angular/router';
import { MessagesService } from '../messages/messages.service';


@Injectable()
export class ContactMessagerieService {
    userToken: any;
    conversations: any;

    url = Urls.server + "lovegos/conversations";
    urlNewConversation = Urls.server + "lovegos/new-conversation";
    constructor(
        private http: HttpClient,
        private tokenService: TokenService,
        private router: Router,
        private messageService: MessagesService
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

    createConversation(body) {
        let observable =  this.http.post<any>(this.urlNewConversation, body,  { headers: this.tokenService.headerObject() });
        observable.subscribe( 
            res => {
                console.log( res);
                if (res.success === "OK"){
                    this.messageService.chargerConversation(res.idConversation);
                    this.router.navigateByUrl;
                    this.router.navigateByUrl("/messagerie");
                }
                else {
                    console.log("ECHEC MESSAGERIE");
                }
            }, 
            err => {
                console.log(err)
            }
        );
    }
}
    

      
