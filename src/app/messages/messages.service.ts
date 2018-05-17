import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { TokenService } from "../services/token.service";
import { Urls } from "../urls";


@Injectable()
export class MessagesService {

    public conversationCourante: any
    public messages: any;
    url = Urls.server + "lovegos/conversation/";
    urlsendMessage = Urls.server + "lovegos/message";

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
                console.log('Conversation chargée : ');
                console.log(res);
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
                if (res.success === "OK"){
                    console.log("idConversation");
                    console.log(body.idConversation);
                     this.chargerConversation(body.idConversation);
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