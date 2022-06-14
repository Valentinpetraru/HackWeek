import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IList } from 'src/app/models/list';
import { GetskillsService } from 'src/app/services/getskills.service';

@Component({
  selector: 'app-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.css']
})
export class GenerateActivityComponent implements OnInit {

  list:IList[] = []

  @Output() prefOutput = new EventEmitter<IList>()



  constructor( private getskill: GetskillsService) { }

  ngOnInit() {
  }


  getHero(){
    this.getskill.getList().subscribe(res => {
      this.list = [res]

    })

   
  }




  save(value: any){
    this.prefOutput.emit(value)
  }

}
