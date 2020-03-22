import { Component, OnInit } from '@angular/core';
import { Subject, interval, ConnectableObservable } from 'rxjs';
import { take, tap, multicast, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.css']
})
export class MulticastComponent implements OnInit {

  constructor() {
    console.log('ENTER MulticastComponent Constrcutor');
    console.log('EXIT MulticastComponent Constrcutor');
  }

  ngOnInit() {
    const source = interval(2000).pipe(take(3));
    const example = source.pipe(
      // since we are multicasting below, side effects will be executed once
      tap((x) => console.log('Side Effect: ' + x)),
      mapTo('Result!')
    );

    // subscribe subject to source upon connect()
    const multi = example.pipe(multicast(() => new Subject())) as ConnectableObservable<any>;
    /* subscribers will share source output */
    const subscriberOne = multi.subscribe(val => console.log('multiOne: ' + val));
    const subscriberTwo = multi.subscribe(val => console.log('multiTwo: ' + val));
    // subscribe subject to source
     multi.connect();
  }

}
