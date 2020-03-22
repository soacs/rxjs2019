import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent implements OnInit {

  constructor() {
    console.log('ENTER BehaviorComponent Constructor');
    console.log('EXIT BehaviorComponent Constructtor');
  }

  ngOnInit() {
  }

}
