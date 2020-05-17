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
  observable2: Observable<number>;

  mergeItArray: Array<any> = [];
  filterItArray: Array<number> = [];
  errorItArray: Array<any> = [];
  scanItArray: Array<number> = [];
  pluckItArray: Array<any> = [];
  windowItArray: Array<any> = [];
  combineItArray: Array<any> = [];

  constructor() {
    console.log('ENTER OperatorsComponent Constructor');
    console.log('EXIT OperatorsComponent Constructor');
  }

  ngOnInit() {
    this.combineIt();
    this.mergeIt();
    this.filterIt();
    this.errorIt();
    this.scanIt();
    this.pluckIt();
    this.windowIt();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  mergeIt() {
    const observable1 = interval(5000);
    const observable2 = interval(2000);
    const merged = merge(observable1, observable2).pipe(take(3));
    this.subscription = merged.subscribe(x => {
      console.log('merge: ' + x);
      this.mergeItArray.push(x);
      }
    );
  }

  filterIt() {
    const nums = of(1, 2, 3, 4, 5);
    const squareOddVals = pipe(filter((n: number) => n % 2 !== 0), map(n => n * n));
    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe(x => {
        console.log('squareOddVals: ' + x);
        this.filterItArray.push(x);
      }
    );
  }

  scanIt() {
    const clicks = fromEvent(document, 'click');
    const ones = clicks.pipe(mapTo(1));
    const seed = 0;
    const count = ones.pipe(scan((acc, one) => acc + one, seed));
    count.subscribe(x => {
        console.log('scan: ' + x);
        this.scanItArray.push(x);
      }
    );
  }

  pluckIt() {
    const clicks = fromEvent(document, 'click');
    const tagNames = clicks.pipe(tap(x => console.log(x)), pluck('target', 'tagName'));
    tagNames.subscribe(x => {
        console.log('pluck: ' + x);
        this.pluckItArray.push(x);
      }
    );
  }

  combineIt() {
    const obs1 = of(1, 2, 3, 4);
    const obs2 = of(5, 6, 7, 8);

    const observable = forkJoin(
      {
        obs1,
        obs2
      }
    );
    observable.subscribe(
      value => {
        console.log('forkJoin: ' + value);
        this.combineItArray.push(value);
      },
      err => console.log('Error'),
      () => console.log('End of the combine!')
    );
    const obs3 = interval(1000).pipe(take(3)); // emit 0, 1, 2 every second and complete
    const obs4 = interval(500).pipe(take(4)); // emit 0, 1, 2, 3 every half a second and complete
    const observable2 = forkJoin({
        obs3, obs4
      }
    );

    observable2.subscribe(
      value =>  {
        console.log('forkJoin: ' + value);
        this.combineItArray.push(value);
      },
      err => {
      },
      () => console.log('End of the forkJoin after streams!')
    );
  }

  windowIt() {
    const clicks = fromEvent(document, 'click');
    const windowObs = interval(50000);
    const result = clicks.pipe(window(windowObs), map(win => win.pipe(take(3)), mergeAll()));
    result.subscribe(x => {
        console.log('window: ' + x);
        this.windowItArray.push(x);
      }
    );
  }

  errorIt() {
    of(10, 20, 30, 40, 50).pipe(
      map(n => {
          if (n === 30) {
            throw new Error('The value 30 is not allowed!');
          }
          return n;
        }
      ), catchError(err => of( err.toString()))).subscribe(x => {
        console.log('error: ' + x);
        this.errorItArray.push(x);
      }
    );

  }
}
