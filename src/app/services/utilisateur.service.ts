import { Utilisateur } from "../models/utilisateur";
import { Injectable } from "@angular/core";
import { GeoLoc } from "../models/geoLoc";

@Injectable()
export class UtilisateurService {
    userConnected: Utilisateur;

         setUserConnected(user: Utilisateur){
             this.userConnected = user;
         }

         getUtilisateur(): Utilisateur {
             return this.userConnected;
         }
}