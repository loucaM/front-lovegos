import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { TokenService } from "../services/token.service";


@Injectable()
export class MessagesService {

    public conversationCourante: any
    public messages: any;
    url = "http://localhost:3000/lovegos/conversation/";
    urlsendMessage = "http://localhost:3000/lovegos/message";
    

    constructor(
        private http: HttpClient,
        private tokenService: TokenService

    ) { }

    getConversation(id: number) {
        let callUrl = this.url + id;
        console.log(callUrl);
        let observable = this.http.get<any>(callUrl, { headers: this.tokenService.headerObject() });
        observable.subscribe(
            res => {
                this.messages = res;
            },
            err => {
                console.log(err)
            }
        );
    }

    chargerConversation(idConv){
        this.getConversation(idConv);
      }

      envoiMessage(body) {
        let observable =  this.http.post<any>(this.urlsendMessage, body,  { headers: this.tokenService.headerObject() });
        observable.subscribe( 
            res => {
                console.log( res);
                if (res.status === "OK"){
                    console.log("message sent");
                    this.chargerConversation(body.idConversationd);
                }
                else {
                }
            }, 
            err => {
                console.log(err)
            }
        );
      }
}