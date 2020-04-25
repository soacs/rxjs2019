import {Component, OnInit, OnDestroy} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {mapTo, map, scan, throttleTime, tap} from 'rxjs/operators';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit, OnDestroy {
obs: Observable<number>;
count: Observable<number>;
flowCount: Observable<number>;

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit() - Invoked');
    this.values();
    this.purity();
    this.flow();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() - Invoked');
  }

  values() {
    const clicks = fromEvent(document, 'click');
    const ones = clicks.pipe(map((event: MouseEvent) => event.clientX), tap(x => console.log('x: ' + x)));
    this.obs = ones.pipe(scan((count, clientX) => count + clientX, 0));
    this.obs.subscribe(count => console.log('values: ' + count));
  }

  purity() {
    const myObs = fromEvent(document, 'click');
    myObs.subscribe(() => console.log('page clicked!'));
    const clicks = fromEvent(document, 'click');
    const ones = clicks.pipe(mapTo(1));
    const seed = 0;
    this.count = ones.pipe(scan((acc, one) => acc + one, seed));
    this.count.subscribe(x => console.log(`Clicked ${x} times`));
  }

  flow() {
    const clicks = fromEvent(document, 'click');
    const ones = clicks.pipe(mapTo(1));
    const seed = 0;
    this.flowCount = ones.pipe(throttleTime(5000), scan((acc, one) => acc + one, seed));
    this.flowCount.subscribe(x => console.log(`Clicked ${x} times`));
  }

}
