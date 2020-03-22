
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription, of, pipe} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  observable: Observable<number>;

  constructor() {
    console.log('ENTER FiltersComponent Constructor');
    console.log('EXIT FiltersComponent Constructtor');
  }

  ngOnInit() {
    console.log('ENTER FiltersComponent ngOnInit');
    this.filterIt();
    console.log('EXIT FiltersComponent ngOnInit');
  }

  filterIt() {
    console.log('ENTER FiltersComponent filterIt');
    const nums = of(1, 2, 3, 4, 5);
    const squareOddVals = pipe(filter((n: number) => n % 2 !== 0), map(n => n * n));
    const squareOdd = squareOddVals(nums);
    this.subscription = squareOdd.subscribe(x => console.log('squareOddVals: ' + x),
      (err) => console.log(err),
      () => console.log('complete'));
    console.log('ENTER FiltersComponent filterIt');
  }

  ngOnDestroy() {
  }
}
