import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';


@Injectable()
export class LoveService {

url = "http://localhost:3000/lovegos/love";
    constructor(
        private http: HttpClient,
        private utilsateurService: UtilisateurService,
        private tokenService: TokenService
    ) {}

    sendLove(connexionBody: Object) {

        let observable =  this.http.post<any>(this.url, connexionBody,  { headers: this.tokenService.headerObject() });
        observable.subscribe( 
            res => {
                if (res.success === "OK"){
                    console.log("love send");
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