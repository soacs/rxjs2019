import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';

@Component({
  selector: 'app-multicasted',
  templateUrl: './multicasted.component.html',
  styleUrls: ['./multicasted.component.css']
})
export class MulticastedComponent implements OnInit {
  observerArrayAMulticast = [];
  observerArrayBMulticast = [];
  numberOfObservers = 0;

  constructor() { }

  ngOnInit() {
    this.multicast();
  }

  multicast() {

    const source = from([1, 2, 3]);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject));

// These are, under the hood, `subject.subscribe({...})`:
    multicasted.subscribe({
      next: (v) => {
        console.log(`observerAMulticast: ${v}`);
        this.observerArrayAMulticast.push(v);
      }
    });
    multicasted.subscribe({
      next: (v) => {
        console.log(`observerBMulticast: ${v}`);
        this.observerArrayBMulticast.push(v);
      }
    });
    this.numberOfObservers = subject.observers.length
    console.log('subject.observers.length = ' + subject.observers.length);

    source.subscribe(subject);

  }

}
