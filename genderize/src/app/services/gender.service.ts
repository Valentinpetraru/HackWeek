import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IGender } from '../models/gender';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient) { }

  getName(name: string): Observable<IGender> {
    return this.http.get<IGender>(`https://api.genderize.io/?name=${name}`);
  }
}
