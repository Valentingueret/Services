import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktails } from './cocktails';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CocktailServiceService {

    constructor(public http: HttpClient) {}
 
    getCocktails(): Observable<Cocktails[]> {
        console.log("this.http.get<Cocktail[]>");
        return this.http.get<Cocktails[]>("assets/cocktails.json");
    }

}