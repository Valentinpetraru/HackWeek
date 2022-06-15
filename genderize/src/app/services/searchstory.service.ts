import { Injectable } from '@angular/core';
import { IGender } from '../models/gender';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchStoryService {
  search: IGender[] = [];
  searchObs: BehaviorSubject<IGender[]> = new BehaviorSubject<IGender[]>([]);
  singleEl: number = 1;
 singleEleObs: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() { }

  getSearchData(): Observable<IGender[]> {
    return this.searchObs.asObservable();
  }

  getSingleElObs(): Observable<number> {
    return this.singleEleObs.asObservable();
  }

  addElement(name: IGender): void {
    this.search.push(name);
    this.searchObs.next(this.search);
    localStorage.setItem('search', JSON.stringify(this.search));
  }

  deleteElement(id: number): void {
    this.search= this.search.filter((search: IGender) => search.id !== id);
    this.searchObs.next(this.search);
    localStorage.setItem('search', JSON.stringify(this.search));
  }

  incrementIndex(): void {
    this.singleEl++;
    this.singleEleObs.next(this.singleEl);
    localStorage.setItem('element', String(this.singleEl));
  }

  setElement(number: number): void {
    this.singleEl = number;
    this.singleEleObs.next(this.singleEl);
    localStorage.setItem('element', String(this.singleEl));
  }

 cancelRows(): void {
    this.search= [];
    this.searchObs.next(this.search);
    localStorage.setItem('searchHistory', JSON.stringify(this.search));
    alert('Table is Empty!');
  }

}
