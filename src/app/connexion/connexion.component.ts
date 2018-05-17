import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ConnexionService } from './connexion.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

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
    private connexionService: ConnexionService,
    private utilsateurService: UtilisateurService,
    private tokenService: TokenService,
    private router: Router
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
    var observable = this.connexionService.connect(this.formModel.login, this.formModel.password);
    console.log(this.formModel.login + " " + this.formModel.password)

    observable.subscribe( 
      res => {
          console.log( res);
          console.log(res.utilisateur);
          if (res.status === "OK"){
              this.utilsateurService.userConnected = res.utilisateur ;
              this.tokenService.setToken(res.token);
              console.log(this.utilsateurService.userConnected.nom);
              console.log("LE TOKEEEEEEEN");
              console.log( this.tokenService.token);

              this.router.navigateByUrl("/monprofil");
          }
          else {
            console.log('ECHEC CONNEXION');
          }
      }, 
      err => {
          console.log(err)
      });
    
   }

  showModal: boolean = false ;

  onShowModal(){
    this.showModal = true ;
  }

  onCloseModal()
 {
   this.showModal = false ; 
 }
  ngOnInit() {
    
    }
}


