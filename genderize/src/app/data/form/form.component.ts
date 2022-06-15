import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { SearchStoryService } from 'src/app/services/searchstory.service';
import { GenderService } from 'src/app/services/gender.service';
import { IGender } from 'src/app/models/gender';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  currentId!: number;
  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, private searchService: SearchStoryService, private api: GenderService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.searchService.getSingleElObs()
        .subscribe((res: number) => {
          this.currentId = res;
        }));
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  submit(): void {
    this.subscriptions.push(
      this.api.getName(this.form.value.name.trim().toLowerCase())
        .subscribe((res: IGender) => {
          this.searchService.addElement({ ...res, date: new Date(), id: this.currentId });
          this.searchService.incrementIndex();
          this.form.reset();
          alert('The searched item was added!!!');
        }));
  }

}
