import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCocktailsService {

  constructor(private privato: HttpClient) {

  }
  getDrinks(): Observable<any[]> {
    return this.privato.get<any[]>('https://www.boredapi.com/api/activity/')
  }
}
