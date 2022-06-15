import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Challenge-Three';

  listDrinks: any[] = []

  saveDrinks(value:any){
    this.listDrinks.push(value)
  }

  removeDrinks(value:any){
    let index = this.listDrinks.indexOf(value);
    this.listDrinks.splice(index, 1)
  }
}
