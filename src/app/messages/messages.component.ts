import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages ;
  idMessage: number;
  constructor(
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.idMessage = this.messagesService.idMessage;
    console.log("id messages");
    console.log(this.idMessage);
    this.messages = this.messagesService.getConversation(this.idMessage);
    console.log(this.messages);
  }
}
