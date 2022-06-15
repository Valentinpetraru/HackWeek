import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-cocktails',
  templateUrl: './favorite-cocktails.component.html',
  styleUrls: ['./favorite-cocktails.component.css']
})
export class FavoriteCocktailsComponent implements OnInit {

 @Input() list: any[] = []

 @Output() remove = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(value:any){
   this.remove.emit(value)
  }

}

