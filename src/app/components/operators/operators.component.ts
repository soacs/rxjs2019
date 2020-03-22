import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, from, fromEvent, Subscription, of} from 'rxjs';
import {interval, merge, pipe, forkJoin} from 'rxjs';
import {filter, map, mapTo, catchError, scan, take, pluck, tap, window, mergeAll} from 'rxjs/operators';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  observable: Observable<number>;

  constructor() {
  console.log('ENTER OperatorsComponent Constructor');
  console.log('EXIT OperatorsComponent Constructtor');
  }

  ngOnInit() {
   // this.mergeIt();
    // this.filterIt();
    // this.errorIt();
    // this.scanIt();
    // this.pluckIt();
   // this.windowIt();
    this.combineIt();
  }

  mergeIt() {
    const observable1 = interval(5000, );
    const observable2 = interval(2000);
    const merged = merge(observable1, observable2).pipe(take(10));
    this.subscription = merged.subscribe(x => console.log('merge: ' + x));
  }

  filterIt() {
    const nums = of(1, 2, 3, 4, 5);
    const squareOddVals = pipe(filter((n: number) => n % 2 !== 0), map(n => n * n));
    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe(x => console.log('squareOddVals: ' + x));

  }

  scanIt() {
    const clicks = fromEvent(document, 'click');
    const ones = clicks.pipe(mapTo(1));
    const seed = 0;
    const count = ones.pipe(scan((acc, one) => acc + one, seed));
    count.subscribe(x => console.log('scan: ' + x));
  }

  pluckIt() {
    const clicks = fromEvent(document, 'click');
    const tagNames = clicks.pipe(tap(x => console.log(x)), pluck('target', 'tagName'));
    tagNames.subscribe(x => console.log('pluck: ' + x));
  }

  combineIt() {
    const observable = forkJoin(
      of(1, 2, 3, 4),
      of(5, 6, 7, 8)
    );
    observable.subscribe(
      value => console.log('forkJoin: ' + value),
      err => {},
      () => console.log('End of the forkJoin streams!')
    );


    const observable2 = forkJoin(
      interval(1000).pipe(take(3)), // emit 0, 1, 2 every second and complete
      interval(500).pipe(take(4)) // emit 0, 1, 2, 3 every half a second and complete
    );
    observable.subscribe(
      value => console.log('forkJoin after: ' + value),
      err => {},
      () => console.log('End of the forkJoin after streams!')
    );



  }

  windowIt() {
  const clicks = fromEvent(document, 'click');
  const intervaler = interval(5000);
  const result = clicks.pipe(window(intervaler), map(win => win.pipe(take(2)), mergeAll()));
  result.subscribe(x => console.log('windowIt: ' + JSON.stringify(x)));
}

  errorIt() {
    of(10, 20, 30, 40, 50).pipe(
      map(n => {
          if (n === 30) {
            throw new Error('30 error!');
          }
          return n;
        }
      ), catchError(err => of('errorIt one', 'errorIt two'))).
    subscribe(x => console.log(x));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
