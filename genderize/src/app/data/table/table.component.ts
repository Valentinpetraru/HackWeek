import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGender } from 'src/app/models/gender';
import { SearchStoryService } from 'src/app/services/searchstory.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  searchHistory!: IGender[];
  subscription!: Subscription;

  constructor(private searchService: SearchStoryService) { }

  ngOnInit(): void {
    this.subscription = this.searchService.getSearchData()
      .subscribe((res: IGender[]) => {
        this.searchHistory = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteElement(id: number | undefined): void {
    if (typeof (id) === 'number') {
      this.searchService.deleteElement(id);
    }
  }

  changeBgColor(fraction: number): string {
    const percent: number = fraction * 100;
    if (percent<= 40) {
      return 'red';
    } else if (percent > 40 && percent < 70) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

}
