import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, from, fromEvent, Subscription} from 'rxjs';
import {interval, merge, pipe, forkJoin, of} from 'rxjs';
import {filter, map, mapTo, catchError, scan, take, pluck, tap, window, mergeAll} from 'rxjs/operators';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-combinations',
  templateUrl: './combinations.component.html',
  styleUrls: ['./combinations.component.css']
})
export class CombinationsComponent implements OnInit {
  subscription: Subscription;
  observable: Observable<number>;
  combinedArray: Array<any> = [];
  combinedArray2: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
    this.combineIt();
    this.combineIt2();
  }

  combineIt() {
    const obs1 = of(1, 2, 3, 3);
    const obs2 = of(5, 6, 7, 9);

    const observable = forkJoin({obs1, obs2});

    observable.subscribe(
      value => {
        console.log('forkJoin: ' + JSON.stringify(value));
        this.combinedArray.push(value);
      },
      err => {
      },
      () => console.log('End of the forkJoin streams!')
    );
  }


  combineIt2() {

    const intervalOne = interval(3000).pipe(take(3));
    const intervalTwo = interval(500).pipe(take(4));

    const observable2 = forkJoin(
      {
        intervalOne, intervalTwo
      }
    );
    observable2.subscribe(
      value => {
        console.log('forkJoin after: ' + JSON.stringify(value));
        this.combinedArray2.push(value);
        },
      err => {
      },
      () => console.log('End of the forkJoin after streams!')
    );
  }
}
