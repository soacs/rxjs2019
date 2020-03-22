import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RxJS 6.5 Demo';
  observable: Observable<number>;
  subscription: Subscription;

  constructor() {
    /* console.log('ENTER AppComponent Constructor');
   this.observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 1000);
  });
    console.log('EXIT AppComponent Constructor');
    */
  }

  ngOnInit() {
  /*  console.log('ENTER AppComponent ngOnInit');
    console.log('just before subscribe');
    this.subscription = this.observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('just after subscribe');
    console.log('EXIT AppComponent ngOnInit');
    */

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
