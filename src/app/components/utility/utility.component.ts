
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, from, Subscription, of} from 'rxjs';
import {interval, merge, pipe} from 'rxjs';
import {filter, map, materialize, take} from 'rxjs/operators';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {

  letters: Observable<any>;
  upperCase: Observable<any>;

  constructor() {
    console.log('ENTER UtilityComponent Constructor');
    this.letters = of('a', 'b', 14, 'd');
    this.upperCase = this.letters.pipe(map(x => x.toUpperCase()));
    console.log('EXIT UtilityComponent Constructtor');
  }

  ngOnInit() {
    console.log('ENTER UtilityComponent ngOnInit()');
    this.materialize();
    console.log('EXIT UtilityComponent ngOnInit()');
  }

  materialize() {
    console.log('ENTER materialize()');
    const materialized = this.upperCase.pipe(materialize());
    materialized.subscribe(x => console.log('Materialized: ' + JSON.stringify(x)));
    console.log('EXIT materialize()');

  }

}
