import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, from, fromEvent, Subscription, of} from 'rxjs';
import {interval, merge, pipe, forkJoin} from 'rxjs';
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

  constructor() {
  }

  ngOnInit() {
    this.combineIt();
  }

  combineIt() {
    const observable = forkJoin(
      of(1, 2, 3, 3),
      of(5, 6, 7, 9)
    );
    observable.subscribe(
      value => console.log('forkJoin: ' + value),
      err => {},
      () => console.log('End of the forkJoin streams!')
    );


    const observable2 = forkJoin(
      interval(3000).pipe(take(3)), //
      interval(500).pipe(take(4)) //
    );
    observable2.subscribe(
      value => console.log('forkJoin after: ' + value),
      err => {},
      () => console.log('End of the forkJoin after streams!')
    );
  }

}
