import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { RecommendationsService } from '../fiches-utilisateurs/recommendation.service';
import { LoveService } from '../services/love.service';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.css']
})
export class MonProfilComponent implements OnInit {
  userConnected : Utilisateur;
  motifs : any;
  lesLove;
  constructor
  (
    private utilsateurService: UtilisateurService,
    private loveService: LoveService
  ) { }

  ngOnInit() {
   // console.log(this.utilsateurService.userConnected.nom);
    this.userConnected = this.utilsateurService.getUtilisateur();
    this.motifs = this.userConnected.motif;
    console.log(this.motifs);
    console.log(this.userConnected.nom);
    this.lesLove = this.loveService.getLove();
    
  }

}
