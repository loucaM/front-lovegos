import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';


@Injectable()
export class ConnexionService {

url = "http://localhost:3000/lovegos/login";
    constructor(
        private http: HttpClient,
        private utilsateurService: UtilisateurService,
        private tokenService: TokenService
    ) {}

    connect(login: string, password: string) {

        let connexionBody = {
            'login': login,
            'password': password
        }

        let observable =  this.http.post<any>(this.url, connexionBody);
        observable.subscribe( 
            res => {
                console.log( res);
                console.log(res.utilisateur);
                if (res.status === "OK"){
                    this.utilsateurService.userConnected = res.utilisateur ;
                    this.tokenService.setToken(res.token);
                    console.log(this.utilsateurService.userConnected.nom);
                    console.log("LE TOKEEEEEEEN");
                    console.log( this.tokenService.token);
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