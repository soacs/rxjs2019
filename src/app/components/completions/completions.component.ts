import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-completions',
  templateUrl: './completions.component.html',
  styleUrls: ['./completions.component.css']
})
export class CompletionsComponent implements OnInit, OnDestroy {

  title = 'RxJS Demo';
  observable: Observable<number>;
  subscription: Subscription;

  constructor() {
    console.log('ENTER CompletionsComponent Constructor');
    this.observable = Rx.Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);

      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 4000);
    });
    console.log('EXIT CompletionsComponent Constructor');
  }

  ngOnInit() {
    console.log('ENTER CompletionsComponent ngOnInit');
    console.log('just before subscribe');
    this.subscription = this.observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('just after subscribe');
    console.log('EXIT CompletionsComponent ngOnInit');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
