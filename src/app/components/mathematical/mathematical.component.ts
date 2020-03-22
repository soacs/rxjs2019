import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription, fromEvent, interval} from 'rxjs';
import { takeUntil, mapTo, reduce} from 'rxjs/operators';


@Component({
  selector: 'app-mathematical',
  templateUrl: './mathematical.component.html',
  styleUrls: ['./mathematical.component.css']
})
export class MathematicalComponent implements OnInit {

  subscription: Subscription;
  observable: Observable<number>;

  constructor() {
  }

  ngOnInit() {
    this.math();
  }

  math() {
    const clicksInFiveSeconds = fromEvent(document, 'click').pipe(takeUntil(interval(5000)));
    const ones = clicksInFiveSeconds.pipe(mapTo(1));
    const seed = 0;
    const count = ones.pipe(reduce((acc, one) => acc + one, seed));
    count.subscribe(x => console.log('Math: ' + x));
  }

}
