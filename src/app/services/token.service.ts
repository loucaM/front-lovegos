import { Injectable } from "@angular/core";

@Injectable()
export class TokenService {
public token: string;

    setToken(token: string) {
        this.token = token;
        console.log(this.token);
    }

    getToken() {
        return this.token;
    }
}