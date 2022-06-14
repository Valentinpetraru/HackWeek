import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-cocktails',
  templateUrl: './favorite-cocktails.component.html',
  styleUrls: ['./favorite-cocktails.component.css']
})
export class FavoriteCocktailsComponent implements OnInit {
  showList: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  show() {
    this.showList = !this.showList
  }
}

