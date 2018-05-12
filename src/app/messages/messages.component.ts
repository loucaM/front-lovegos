import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages : any [];
  constructor() { }

  ngOnInit() {  
    this.messages = [
      {
        "id": 5,
        "titre":"Aimons les poires",
        "messages" : [
          {
          "contenu": "J'aime me beurrer la biscotte",
          "dateEnvoi": "2012-04-23T18:25:43.511Z",
          "dateLecture": "2012-04-23T19:25:43.511Z",
            "auteur" : {
              "nom":"Loveur",
              "prenom":"Hitch",
              "photo":"./assets/images/homme.jpg"
              }
            },
            {
              "contenu": "J'aime me beurrer la biscotte",
              "dateEnvoi": "2012-04-23T18:25:43.511Z",
              "dateLecture": "2012-04-23T19:25:43.511Z",
                "auteur" : {
                  "nom":"Loveur",
                  "prenom":"Hitch",
                  "photo":"./assets/images/homme.jpg"
                  }
            }, 
            {
              "contenu": "J'aime me beurrer la biscotte",
              "dateEnvoi": "2012-04-23T18:25:43.511Z",
              "dateLecture": "2012-04-23T19:25:43.511Z",
                "auteur" : {
                  "nom":"Loveur",
                  "prenom":"Hitch",
                  "photo":"./assets/images/homme.jpg"
                  }
            }
        ]
      }
  ];
console.log(this.messages);
  }
}
