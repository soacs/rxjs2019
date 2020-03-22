import {Component, OnInit } from '@angular/core';
import {Observable, fromEvent, Subscription, interval, merge} from 'rxjs';
import { map, mapTo, scan, take, pluck, tap, window, mergeAll} from 'rxjs/operators';

@Component({
  selector: 'app-transformations',
  templateUrl: './transformations.component.html',
  styleUrls: ['./transformations.component.css']
})
export class TransformationsComponent implements OnInit {
  subscription: Subscription;
  observable: Observable<number>;

  constructor() {
  }

  ngOnInit() {
    this.pluckIt();
  }

  mergeIt() {
    const observable1 = interval(1000, );
    const observable2 = interval(1000);
    const merged = merge(observable1, observable2).pipe(take(10));
    this.subscription = merged.subscribe(x => console.log('merged: ' + x),
      (err) => console.log(err),
      () => console.log('complete'));
  }

  scanIt() {
    const clicks = fromEvent(document, 'click');
    const ones = clicks.pipe(mapTo(1));
    const seed = 0;
    const count = ones.pipe(scan((acc, one) => acc + one, seed), take(10));
    count.subscribe(x => console.log('scan: ' + x),
      (err) => console.log(err),
      () => console.log('scan complete'));
  }

  pluckIt() {
    const clicks = fromEvent(document, 'click');
    const tagNames = clicks.pipe(tap((x: MouseEvent) => console.log('X coordinate: ' + x.clientX)), pluck('target', 'tagName'));
    tagNames.subscribe(x => console.log('pluck: ' + x));
  }

  windowIt() {
    const clicks = fromEvent(document, 'click');
    const intervaler = interval(5000);
    const result = clicks.pipe(window(intervaler), map(win => win.pipe(take(2)), mergeAll()));
    result.subscribe(x => console.log('windowIt: ' + JSON.stringify(x)));
  }
}
