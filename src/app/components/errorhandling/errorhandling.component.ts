import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { map , catchError} from 'rxjs/operators';

@Component({
  selector: 'app-errorhandling',
  templateUrl: './errorhandling.component.html',
  styleUrls: ['./errorhandling.component.css']
})
export class ErrorhandlingComponent implements OnInit {
  subscription: Subscription;
  observable: Observable<number>;

  constructor() {
  }

  ngOnInit() {
    this.errorhandling();
  }

  errorhandling() {
    this.observable = of(1, 2, 3, 4, 5);
    const errorObs = this.observable.pipe(
      map(n => {
        if (n === 4) {
          throw new Error('four!');
        }
        return n;
      }), catchError(err => of('ERROR', '4', '5', '6')));
      errorObs.subscribe(x => console.log('value: ' + x));

  }

}
