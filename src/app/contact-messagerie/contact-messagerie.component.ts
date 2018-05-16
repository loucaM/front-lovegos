import { Component, OnInit } from '@angular/core';
import { ContactMessagerieService } from './contact-messagerie.service';

@Component({
  selector: 'app-contact-messagerie',
  templateUrl: './contact-messagerie.component.html',
  styleUrls: ['./contact-messagerie.component.css']
})
export class ContactMessagerieComponent implements OnInit {

  conversations: any;
  constructor(
    private contactMessagerieService: ContactMessagerieService
  ) { }


  ngOnInit() {
    this.contactMessagerieService.getConversations();
    setTimeout(() => {
      this.conversations = this.contactMessagerieService.conversations;
    }, 1000);
     console.log("conversations, contact messagerie");
    console.log(this.conversations);

  }
}
