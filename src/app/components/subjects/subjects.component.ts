import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  simpleSubject: Subject<number>;
  subscriberAArray: Array<string> = [];
  subscriberBArray: Array<string> = [];

  constructor() {
    console.log('ENTER SubjectsComponent Constructor');
    console.log('EXIT SubjectsComponent Constructtor');
  }
  ngOnInit() {
    console.log('ENTER ngOnInit');
    console.log('EXIT ngOnInit');
  }

  executeSimple() {
    console.log('ENTER executeSimple');
    this.simpleSubject = new Subject();
    this.simpleSubject.next(1);
    this.simpleSubject.subscribe(x => {
      console.log('Subscriber A', x);
      this.subscriberAArray.push('Subscriber A = ' + x);
    });
    this.simpleSubject.next(2); // OUTPUT => Subscriber A 2
    this.simpleSubject.subscribe(x => {
      console.log('Subscriber B', x);
      this.subscriberBArray.push('Subscriber B = ' + x);
    });
    this.simpleSubject.next(3); // OUTPUT => Subscriber A 3, Subscriber B 3 (logged from both subscribers)
    console.log('EXIT executeSimple');
  }

  clear() {
    this.subscriberAArray = [];
    this.subscriberBArray = [];
  }

}
