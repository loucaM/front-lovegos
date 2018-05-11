import { Component, OnInit } from '@angular/core';
import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core/src/metadata/di';

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
    this.showMessage[index] ? false : true ;
    console.log(index);
    console.log(this.showMessage[index]);

}
  constructor() { }

  ngOnInit() {
    this.people =  [
      {
        "name": "Douglas  Pace"
      },
      {
        "name": "Mcleod  Mueller"
      },
      {
        "name": "Day  Meyers"
      },
      {
        "name": "Aguirre  Ellis"
      },
      {
        "name": "Cook  Tyson"
      }
    ];
    this.showMessage.length = this.people.length;
    
    for(var i = 0 ; i< this.people.length ; ++i){
      this.showMessage[i] = false ;
    }
  
  }


}
