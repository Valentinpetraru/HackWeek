import { Component, OnInit } from '@angular/core';
import { IList } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'challange-one';





prefItems: IList[] = []



  addItems(item:IList){
    this.prefItems.push(item);
    let data = this.prefItems
    localStorage.setItem('i', JSON.stringify(data))
  }


  removeItems(item:any){
    let index = this.prefItems.indexOf(item)
    this.prefItems.splice(index, 1)
    let datay = this.prefItems
    localStorage.setItem('i', JSON.stringify(datay))
  }

ngOnInit() {
  let datas:any = localStorage.getItem('i')
  this.prefItems = JSON.parse(datas)
  }

}




