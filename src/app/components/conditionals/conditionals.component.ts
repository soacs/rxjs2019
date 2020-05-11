import { Component, OnInit } from '@angular/core';
import { tap, every, find } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { Observable, Subscription, of, fromEvent } from 'rxjs';

@Component({
  selector: 'app-conditionals',
  templateUrl: './conditionals.component.html',
  styleUrls: ['./conditionals.component.css']
})
export class ConditionalsComponent implements OnInit {
  subscription: Subscription;
  observable: Observable<number>;
  conditionalArray: Array<number> = [];
  isTrue; boolean;

  constructor() {
  }

  ngOnInit() {
    this.conditionals();
  }

  conditionals() {
    const myBoolean = of(3, 2, 4, 1, 9, 7).pipe(tap(x => console.log(x)), every(x => x <= 9));

    this.subscription = myBoolean.subscribe(x => {
      console.log('Conditional: ' + x);
      this.isTrue = x;
    });

    const sameBoolean = of(3, 2, 4, 1, 9, 7);

    this.subscription = sameBoolean.subscribe(x => {
      this.conditionalArray.push(x);
    });








  }
}
