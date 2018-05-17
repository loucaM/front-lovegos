import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { TokenService } from '../services/token.service';
import { Urls } from '../urls';


@Injectable()
export class LoveService {

    lesLoves: any;
url = Urls.server + "lovegos/love";
urlGetLove = Urls.server + "lovegos/loves";

    constructor(
        private http: HttpClient,
        private utilsateurService: UtilisateurService,
        private tokenService: TokenService
    ) {}

    getLove() {
        console.log(this.tokenService.headerObject());
        let observable = this.http.get<Utilisateur[]>(this.urlGetLove, { headers: this.tokenService.headerObject() });
        observable.subscribe(
            res => {
                console.log("les Loves");
                console.log(res);
                this.lesLoves = res;
            },
            err => {
                console.log(err)
            }
        );
      
    }

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