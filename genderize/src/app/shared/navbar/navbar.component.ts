import { Component, OnInit } from '@angular/core';
import { SearchStoryService } from 'src/app/services/searchstory.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private searchService: SearchStoryService) { }

  ngOnInit(): void {
  }

  cancelRows(): void {
    this.searchService.cancelRows();
  }

}
