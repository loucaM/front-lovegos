import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-messagerie',
  templateUrl: './contact-messagerie.component.html',
  styleUrls: ['./contact-messagerie.component.css']
})
export class ContactMessagerieComponent implements OnInit {

  personnes: any [];
  constructor() { }

  ngOnInit() {
    this.personnes =  [
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
  }

}
