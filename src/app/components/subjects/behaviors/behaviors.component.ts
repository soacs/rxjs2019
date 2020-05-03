import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviors',
  templateUrl: './behaviors.component.html',
  styleUrls: ['./behaviors.component.css']
})
export class BehaviorsComponent implements OnInit {

  observerArrayA = [];
  observerArrayB = [];

  constructor() { }

  ngOnInit() {

    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
        this.observerArrayA.push(v);
      }
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`);
        this.observerArrayB.push(v);
      }
    });

    subject.next(3);
  }

}
