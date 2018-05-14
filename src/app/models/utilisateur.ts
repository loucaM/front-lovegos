import { GeoLoc } from "./geoLoc";



export class Utilisteur {
    constructor(
        public id: number,
        public dateNaissance: Date,
        public geoLoc: GeoLoc,
        public photo: string,
        public nom: string,
        public prenom: string,
        public motifs: string [],
        public trancheAgeRecherche: string [1],
        public genreRecherches: string [],
        public presentation: string,
        public genre: string 
    ) {}
}