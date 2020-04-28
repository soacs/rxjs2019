import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html',
  styleUrls: ['./observers.component.css']
})
export class ObserversComponent implements OnInit, OnDestroy {
  observable: Observable<string>;
  myArray1: Array<string> = [];
  myArray2: Array<string> = [];

  constructor() {
    console.log('ENTER ObserversComponent Constructor');
    console.log('EXIT ObserversComponent Constructor');
  }

  ngOnInit() {
    console.log('ENTER ObserversComponent ngOnInit');
    this.observable = Rx.Observable.create(function (observer) {
      observer.next('twenty');
      observer.next('thirty');
      observer.next('forty');
      setTimeout(() => {
        observer.next('fifty');
        observer.complete();
      }, 3000);
    });
  }

  ngOnDestroy() {
    console.log('ENTER ObserversComponent ngOnDestroy()');
  }

  executeObserver1() {
    console.log('ENTER executeObserver1');
    this.observable.subscribe({
      next: x => {
        console.log('OBSERVER1 - got value ' + x);
        this.myArray1.push('OBSERVER1 - next value: ' + x);
      },
      error: err => console.error('OBSERVER1 - something wrong occurred: ' + err),
      complete: () => console.log('OBSERVER1 - done'),
    });
    console.log('EXIT executeObserver1');
  }

  executeObserver2() {
    console.log('ENTER executeObserver2');
    setTimeout(() => {
      this.observable.subscribe({
        next: x => {
          console.log('OBSERVER2 -  got value ' + x);
          this.myArray2.push('OBSERVER2 - next value: ' + x);
        },
        error: err => console.error('OBSERVER2 - something wrong occurred: ' + err),
        complete: () => console.log(' OBSERVER2 -  done'),
      });

    }, 5000);
    console.log('EXIT executeObserver2');
  }

  clearObserver1() {
    this.myArray1 = [];
  }

  clearObserver2() {
    this.myArray2 = [];
  }
}
