import { Component, OnInit } from '@angular/core';
import { Subject, from } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  observerA: number;
  observerB: number;

  observerArrayA = [];
  observerArrayB = [];

  observerFromA: number;
  observerFromB: number;

  fromArrayA = [];
  fromArrayB = [];

  constructor() {
  }

  ngOnInit() {
    this.simpleMulticast();
    this.simpleFrom();
  }

  simpleMulticast() {
    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
        this.observerA = v;
        this.observerArrayA.push(v);
      }
    });
    subject.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`);
        this.observerB = v;
        this.observerArrayB.push(v);
      }
    });

    subject.next(10);
    subject.next(20);
  }

  simpleFrom() {

    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => {
        console.log(`observerFromA: ${v}`);
        this.fromArrayA.push(v);

      }
    });
    subject.subscribe({
      next: (v) => {
        console.log(`observerFromB: ${v}`);
        this.fromArrayB.push(v);
      }
    });


    // creates observable from array
    const observable = from([1, 2, 3]);

    // You can subscribe providing a Subject since it is an observer
    observable.subscribe(subject);
  }

}
