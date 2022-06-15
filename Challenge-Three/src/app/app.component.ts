import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Challenge-Three';
  session = false;
  listDrinks: any[] = []

  saveDrinks(value: any) {
    this.listDrinks.push(value)
  }

  removeDrinks(value: any) {
    let index = this.listDrinks.indexOf(value);
    this.listDrinks.splice(index, 1)
  }

  ngOnInit(): void {

    if (this.listDrinks.length > 0) {
      this.session = false
    } else {
      this.session = true
    }
  }
}
