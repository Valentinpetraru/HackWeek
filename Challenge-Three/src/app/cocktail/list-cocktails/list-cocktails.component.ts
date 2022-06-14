import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {
  @Output() mostra = new EventEmitter<any>()
  value: boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  show(event: any) {
    this.mostra.emit(event)
  }
}
