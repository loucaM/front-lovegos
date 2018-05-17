import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  formModel ;
  messageForm: FormGroup;

  messages ;
  constructor(
    private messagesService: MessagesService,
    private builder: FormBuilder,
    private userService: UtilisateurService
  ) { 
    this.createForm();
  }

  createForm() {
    this.messageForm = this.builder.group({
      'contenu': new FormControl ( null, Validators.required),
    });
   }

   sendMessage(idConv) {
     console.log("id conv message envoi");
     console.log(idConv);
     this.formModel = this.messageForm.value;
    let body = {
      idConversation: idConv,
      message : {
        contenu: this.formModel.contenu,
        dateEnvoi: new Date,
        auteur: this.userService.userConnected.id
      }
    };
    console.log("body Message component");
    console.log(body);
    this.messagesService.envoiMessage(body);
    this.messageForm.reset();
   }

  ngOnInit() {
    //vAfficher la première conversation ?
  }

  
}
