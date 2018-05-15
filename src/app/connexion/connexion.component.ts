import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import * as $ from 'jquery' ;
import { ConnexionService } from './connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements  OnInit {

  formModel ;
  connexionForm: FormGroup;

  constructor ( 
    private builder: FormBuilder,
    private connexionService: ConnexionService
  ) {     
     this.createForm();
    }

  createForm() {
    this.connexionForm = this.builder.group({
      'login': new FormControl ( null, Validators.required),
      'password': new FormControl( null, Validators.required)
    });
   }

   onConnect() {
    this.formModel = this.connexionForm.value;
    this.connexionService.connect(this.formModel.login, this.formModel.password);
    console.log(this.formModel.login + " " + this.formModel.password)
    
   }

  showModal: boolean = false ;

  onShowModal(){
    this.showModal = true ;
    console.log("showModal");
  }

  onCloseModal()
 {
   this.showModal = false ; 
    console.log("showModal");
 }
  ngOnInit() {
    
    }
}


