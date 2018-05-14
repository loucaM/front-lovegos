import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisteur } from '../models/utilisateur';
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
                    this.utilsateurService.setUserConnected(res.utilisateur) ;
                    this.tokenService.setToken(res.token);
                }
                else {
                    
                }
            }, 
            err => {
                console.log(err)
            }
        );
        return observable;
/*         {this.utilsateurService.setUserConnected( id,
            dateNaissance,
            geoLoc,
            photo,
            nom: string,
            prenom: string,
            motifs: string [],
            trancheAgeRecherche: string [1],
            genreRecherches: string [],
            presentation: string,
            genre: string )}, */
    }

}