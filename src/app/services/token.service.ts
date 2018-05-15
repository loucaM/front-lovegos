import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class TokenService {
public token: string;

    setToken(token: string) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    headerObject(){
       return new HttpHeaders({
            'Content-Type': 'application/json',
            'Auth-token': this.token
        });
    }
}