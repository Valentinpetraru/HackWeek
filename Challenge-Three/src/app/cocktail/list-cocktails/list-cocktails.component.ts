import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetCocktailsService } from 'src/app/get-cocktails.service';
@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {
  arr: any[] = [];
  value: boolean = false
  constructor(private mamma: GetCocktailsService) { }

  ngOnInit(): void {
  }
  show() {
    this.value = true;
  }
  getList() {
    this.mamma.getDrinks().subscribe(response => {
      this.arr = response;
      console.log(this.arr)
    })
  }
}
