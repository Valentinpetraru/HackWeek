import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCocktailsService {

  constructor(private privato: HttpClient) {

  }
  getDrinks(value:string): Observable<any> {
    return this.privato.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`)
  }
}
