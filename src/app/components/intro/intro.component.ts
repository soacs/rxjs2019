import {Component, OnInit, OnDestroy} from '@angular/core';
import {fromEvent} from 'rxjs';
import {mapTo, map, scan, throttleTime, tap} from 'rxjs/operators';

import * as Rx from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() {
    // this.purity();
    // this.flow();
    this.values();
  }

  ngOnInit() {
  }

  purity() {
    const myObs = fromEvent(document, 'click');
    myObs.subscribe(() => console.log('page clicked!'));

    const clicks = fromEvent(document, 'click');
    const ones = clicks.pipe(mapTo(1));
    const seed = 0;
    const count = ones.pipe(scan((acc, one) => acc + one, seed));
    count.subscribe(x => console.log(`Clicked ${x} times`));
  }

  flow() {

    const clicks = fromEvent(document, 'click');
    const ones = clicks.pipe(mapTo(1));
    const seed = 0;
    const count = ones.pipe(throttleTime(5000), scan((acc, one) => acc + one, seed));
    count.subscribe(x => console.log(`Clicked ${x} times`));
  }

  values() {
    const clicks = fromEvent(document, 'click');
    const ones = clicks.pipe(map((event: MouseEvent) => event.clientX), tap(x => console.log('x: ' + x)));
    const obs = ones.pipe(scan((count, clientX) => count + clientX, 0));
    obs.subscribe(count => console.log('values: ' + count));
  }
}
