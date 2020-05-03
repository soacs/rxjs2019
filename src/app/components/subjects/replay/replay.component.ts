import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  observerArrayA = [];
  observerArrayB = [];

  constructor() { }

  ngOnInit() {
    this.replaySimple();
  }

  replaySimple() {
    // buffer 2 values for new subscribers
    const subject = new ReplaySubject(2);

    subject.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
        this.observerArrayA.push(v);
      }
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`);
        this.observerArrayB.push(v);
      }
    });

    subject.next(5);
  }

}
