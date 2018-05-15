import { Component, OnInit } from '@angular/core';
import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core/src/metadata/di';
import { RecommendationsService } from './recommendation.service';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-fiches-utilisateurs',
  templateUrl: './fiches-utilisateurs.component.html',
  styleUrls: ['./fiches-utilisateurs.component.css']
})
export class FichesUtilisateursComponent implements OnInit {
  people: any;
  
  showMessage: boolean  [] = []; 

  onShowPresentation(index: number){
    if (this.showMessage[index] ===false) {
      this.showMessage[index] = true ;
    } else {
      this.showMessage[index] = false ;
    }


}
  constructor(
    private recommendationsService: RecommendationsService
  ) { }

  ngOnInit() {
    this.recommendationsService.getRecommendations(); 
    setTimeout(() => {
           this.people =  this.recommendationsService.getUtilisateur() ;
    }, 1000);

    console.log("people");
   console.log(this.people);
/*     this.showMessage.length = this.people.length;
    
    for(var i = 0 ; i< this.people.length ; ++i){
      this.showMessage[i] = false ;
    } */
  
  }


}
