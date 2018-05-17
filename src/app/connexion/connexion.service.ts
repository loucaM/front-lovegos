import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';
import { Urls } from '../urls';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ConnexionService {

url = Urls.server + "lovegos/login";
    constructor(
        private http: HttpClient,
        private utilsateurService: UtilisateurService,
        private tokenService: TokenService
    ) {}

    connect(login: string, password: string): Observable<any> {
        let connexionBody = {
            'login': login,
            'password': password
        }
        return  this.http.post<any>(this.url, connexionBody);
        
        
    }
}