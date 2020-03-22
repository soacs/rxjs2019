
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, from, Subscription, of, asyncScheduler} from 'rxjs';
import {interval, merge, pipe} from 'rxjs';
import {filter, map, catchError} from 'rxjs/operators';
import {take} from 'rxjs/operators';
import { observeOn } from 'rxjs/operators';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  observable: Observable<number>;

  constructor() {
    console.log('ENTER SchedulerComponent Constructor');
    this.observable = Rx.Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    }).pipe(observeOn(asyncScheduler));

    console.log('EXIT SchedulerComponent Constructor');
  }

  ngOnInit() {
    console.log('ENTER SchedulerComponent ngOnInit');
    this.scheduler();
    console.log('EXIT SchedulerComponent ngOnInit');
  }

  scheduler() {
    console.log('ENTER scheduler()');
    console.log('Scheduler: just before subscribe');
    this.observable.subscribe({
      next: x => console.log('Scheduler: got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('Scheduler: just after subscribe');
    console.log('EXIT scheduler()');
  }

}
