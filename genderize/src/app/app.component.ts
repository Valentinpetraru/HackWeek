import { Component, OnInit } from '@angular/core';
import { IGender } from './models/gender';
import { SearchStoryService } from './services/searchstory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private searchService: SearchStoryService) { }

  ngOnInit(): void {
    if (localStorage['searchHistory']) {
      const localStorageArray: IGender[] = JSON.parse(localStorage.getItem('searchHistory') || "");
      if (localStorageArray.length > 0) {
        localStorageArray.forEach((name: IGender) => {
          this.searchService.addElement(name);
        });
      }
    }
    if (localStorage['element']) {
      this.searchService.setElement(Number(localStorage.getItem('element')));
    }
  }
}
