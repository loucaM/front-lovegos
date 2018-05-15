import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { RecommendationsService } from '../fiches-utilisateurs/recommendation.service';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.css']
})
export class MonProfilComponent implements OnInit {
  userConnected : Utilisateur;
  constructor
  (
    private utilsateurService: UtilisateurService
  ) { }

  ngOnInit() {
    console.log(this.utilsateurService.userConnected.nom);
    this.userConnected = this.utilsateurService.getUtilisateur();
    console.log(this.userConnected.nom);
    
  }

}
