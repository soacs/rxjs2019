import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {
  observerA: any;
  observerB: any;

  constructor() { }

  ngOnInit() {


    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
        this.observerA = v;
      }
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`);
        this.observerB = v;
      }
    });

    subject.next(5);
    subject.complete();

  }

}
