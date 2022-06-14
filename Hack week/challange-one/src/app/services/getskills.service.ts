import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IList } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class GetskillsService {

  constructor( private http: HttpClient) {}

  getList(): Observable<IList>{
   return this.http.get<IList>('https://www.boredapi.com/api/activity/')
  }
}
