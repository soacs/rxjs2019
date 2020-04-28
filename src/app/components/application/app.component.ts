import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RxJS 6.5 Course';

  constructor() {
    console.log('ENTER AppComponent Constructor');
    console.log('EXIT AppComponent Constructor');
  }

  ngOnInit() {
    console.log('ENTER AppComponent ngOnInit()');
    console.log('EXIT AppComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('ENTER AppComponent ngOnDestroy()');
    console.log('EXIT AppComponent ngOnDestroy()');
  }
}
