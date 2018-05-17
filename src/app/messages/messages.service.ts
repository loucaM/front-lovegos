import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { TokenService } from "../services/token.service";


@Injectable()
export class MessagesService {

    public idMessage: number;
    public messages: any;
    url = "http://localhost:3000/lovegos/conversation/";

    constructor(
        private http: HttpClient,
        private tokenService: TokenService

    ) { }

    getConversation(id: number) {
        this.url = this.url + id;
        console.log(this.url);
        let observable = this.http.get<any>(this.url, { headers: this.tokenService.headerObject() });
        observable.subscribe(
            res => {
                this.messages = res;
                console.log("messages");
                console.log(this.messages);
                
            },
            err => {
                console.log(err)
            }
        );
    }
}