import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor() { }
  showModal: boolean = false ;

  onShowModal(){
    this.showModal = true ;
    console.log("showModal");
  }

  ngOnInit() {
    
    }
}


