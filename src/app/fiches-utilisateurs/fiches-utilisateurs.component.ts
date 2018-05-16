import { Component, OnInit } from '@angular/core';
import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core/src/metadata/di';
import { RecommendationsService } from './recommendation.service';
import { Utilisateur } from '../models/utilisateur';
import { ContactMessagerieService } from '../contact-messagerie/contact-messagerie.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { LoveService } from '../services/love.service';

@Component({
  selector: 'app-fiches-utilisateurs',
  templateUrl: './fiches-utilisateurs.component.html',
  styleUrls: ['./fiches-utilisateurs.component.css']
})
export class FichesUtilisateursComponent implements OnInit {
  people: any;

  showMessage: boolean[] = [];
  participants: number [] = [];

  onShowPresentation(index: number) {
    if (this.showMessage[index] === false) {
      this.showMessage[index] = true;
    } else {
      this.showMessage[index] = false;
    }
  }

  constructor(
    private recommendationsService: RecommendationsService,
    private contactMessagerieService: ContactMessagerieService,
    private utilisateurService: UtilisateurService,
    private loveService: LoveService
  ) { }


  createConversation(id: number) {
    console.log("id utilisisateur");
    console.log(id);
    
    this.participants.push(id);
    this.contactMessagerieService.createConversation(this.participants);
  }

  sendLove(idLove: number) {
    let bodyLove  = {
      "dateHeure": new Date,
      "vu" : false,
      "idExp": this.utilisateurService.getUtilisateur().id,
      "idDest": idLove
    };
    console.log("bodyLove");

    console.log(bodyLove);
    this.loveService.sendLove(bodyLove);
  }


  ngOnInit() {
    this.recommendationsService.getRecommendations();
    setTimeout(() => {
      this.people = this.recommendationsService.getUtilisateur();

      console.log("people");
      console.log(this.people);
    }, 1000);
    /*     this.showMessage.length = this.people.length;
        
        for(var i = 0 ; i< this.people.length ; ++i){
          this.showMessage[i] = false ;
        } */
  }
}
