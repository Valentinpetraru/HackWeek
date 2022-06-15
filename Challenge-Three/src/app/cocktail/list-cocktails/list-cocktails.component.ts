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

  @Output() preleva = new EventEmitter<any>()
  constructor(private mamma: GetCocktailsService) { }



  ngOnInit(): void {
  }

  getList(value:string) {
    this.mamma.getDrinks(value).subscribe(response => {
      this.arr = response.drinks;
      this.value = true;
      console.log(this.arr);
    })
  }

  addPref(value:any){
   this.preleva.emit(value)
  }
}
