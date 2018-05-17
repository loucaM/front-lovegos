import { GeoLoc } from "./geoLoc";
export class Utilisateur {
    constructor(
        public id: number,
        public dateNaissance: Date,
        public geoLoc: GeoLoc,
        public photo: string,
        public nom: string,
        public prenom: string,
        public motif: string [],
        public trancheAgeRecherche: string [1],
        public genresRecherches: string [],
        public presentation: string,
        public genre: string 
    ) {}
}