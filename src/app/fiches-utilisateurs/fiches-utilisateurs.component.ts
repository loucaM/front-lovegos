import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from './recommendation.service';
import { Utilisateur } from '../models/utilisateur';
import { ContactMessagerieService } from '../contact-messagerie/contact-messagerie.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { LoveService } from '../services/love.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-fiches-utilisateurs',
  templateUrl: './fiches-utilisateurs.component.html',
  styleUrls: ['./fiches-utilisateurs.component.css']
})
export class FichesUtilisateursComponent implements OnInit {
  people: any;

  formModel ;
  createConvForm: FormGroup;

  showMessage: boolean[] = [];
  participants: number [] = [];
  showRecommandation;
  hisId;

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
    private loveService: LoveService,
    private builder: FormBuilder,
    
  ) {   this.createForm();}

  createForm() {
    this.createConvForm = this.builder.group({
      'titre': new FormControl ( null, Validators.required),
    });
   }


  createConversation(hisId) {
    console.log("Show conversation")
  /*   console.log("id utilisisateur");
    console.log(id);
    
    this.participants.push(id);
    this.contactMessagerieService.createConversation(this.participants); */
    this.showRecommandation = true;
      this.hisId = hisId;
  }


  onCreateConv(){
    this.formModel = this.createConvForm.value;
    let body = {
      titre: this.formModel.titre,
      participants : [this.utilisateurService.userConnected.id ,this.hisId]
    }
    console.log(body);
    this.contactMessagerieService.createConversation(body);
  }

  onCloseModal() {
    let myId = this.utilisateurService.userConnected.id;
    console.log("myId id : "+ myId);
    console.log("his id  "+this.hisId);

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
    this.showRecommandation = false;
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
