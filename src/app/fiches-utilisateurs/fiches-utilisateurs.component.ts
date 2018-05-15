import { Component, OnInit } from '@angular/core';
import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core/src/metadata/di';
import { RecommendationsService } from './recommendation.service';

@Component({
  selector: 'app-fiches-utilisateurs',
  templateUrl: './fiches-utilisateurs.component.html',
  styleUrls: ['./fiches-utilisateurs.component.css']
})
export class FichesUtilisateursComponent implements OnInit {
  people: any [];
  
  showMessage: boolean  [] = []; 

  onShowPresentation(index: number){
    if (this.showMessage[index] ===false) {
      this.showMessage[index] = true ;
    } else {
      this.showMessage[index] = false ;
    }
    console.log(index);
    console.log(this.showMessage[index]);

}
  constructor(
    private recommendationsService: RecommendationsService
  ) { }

  ngOnInit() {
    this.recommendationsService.getRecommendations();
    this.people =  this.recommendationsService.utilisateurs ;
    this.showMessage.length = this.people.length;
    
    for(var i = 0 ; i< this.people.length ; ++i){
      this.showMessage[i] = false ;
    }
  
  }


}
