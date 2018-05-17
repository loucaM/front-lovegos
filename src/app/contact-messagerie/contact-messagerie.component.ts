import { Component, OnInit } from '@angular/core';
import { ContactMessagerieService } from './contact-messagerie.service';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-contact-messagerie',
  templateUrl: './contact-messagerie.component.html',
  styleUrls: ['./contact-messagerie.component.css']
})
export class ContactMessagerieComponent implements OnInit {

  conversations: any;
  constructor(
    private contactMessagerieService: ContactMessagerieService,
    private messagesService: MessagesService
  ) { }

  afficherConversation(id: number){
    console.log("id conversation");
    console.log(id);
    this.messagesService.chargerConversation(id);
  }

  ngOnInit() {
    this.contactMessagerieService.getConversations();
    setTimeout(() => {
      this.conversations = this.contactMessagerieService.conversations;
    }, 1000);
  }
}
