import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() {
    console.log('ENTER SubjectsComponent Constructor');
    console.log('EXIT SubjectsComponent Constructtor');
  }

  ngOnInit() {
  }

}
