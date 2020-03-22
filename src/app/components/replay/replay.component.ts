import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  constructor() {
    console.log('ENTER ReplayComponent Constructor');
    console.log('EXIT ReplayComponent Constructtor');
  }

  ngOnInit() {
  }

}
