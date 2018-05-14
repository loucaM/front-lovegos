import { Utilisteur } from "../models/utilisateur";
import { Injectable } from "@angular/core";
import { GeoLoc } from "../models/geoLoc";

@Injectable()
export class UtilisateurService {
    userConnected: Utilisteur;

    setUserConnectedRelou( 
         id: number,
         dateNaissance: Date,
         geoLoc: GeoLoc,
         photo: string,
         nom: string,
         prenom: string,
         motifs: string [],
         trancheAgeRecherche: string [1],
         genreRecherches: string [],
         presentation: string,
         genre: string 
        ) {   
            this.userConnected.id = id;
            this.userConnected.dateNaissance = dateNaissance;
            this.userConnected.geoLoc.lat =geoLoc.lat;
            this.userConnected.geoLoc.long =geoLoc.long;
            this.userConnected.nom = nom;
            this.userConnected.prenom = prenom;
            this.userConnected.motifs = motifs;
            this.userConnected.trancheAgeRecherche = trancheAgeRecherche;
            this.userConnected.genreRecherches = genreRecherches;
            this.userConnected.presentation = presentation;
            this.userConnected.genre = genre;    
         }

         setUserConnected(user: Utilisteur){
             this.userConnected = user;
             console.log("user : "+ this.userConnected.nom);
         }
}