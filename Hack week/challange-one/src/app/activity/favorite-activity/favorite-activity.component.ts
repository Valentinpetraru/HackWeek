import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IList } from 'src/app/models/list';

@Component({
  selector: 'app-favorite-activity',
  templateUrl: './favorite-activity.component.html',
  styleUrls: ['./favorite-activity.component.css']
})
export class FavoriteActivityComponent implements OnInit {

  listOfItems: IList[] = []
@Output() deleteItem = new EventEmitter<IList>()

 @Input() pref!:IList[];

  constructor() { }

  ngOnInit(): void {

  }



deleteItemOfTable(value:any){
  this.deleteItem.emit(value)
}

}
