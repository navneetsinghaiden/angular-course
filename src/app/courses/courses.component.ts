import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title:string = "courses";

  courses = [
  {
    name : 'Angular Beginner',
    level : 'Beginner'
  },
  {
    name : 'Angular intermediate',
    level : 'intermediate'
  },
  {
    name : 'Angular Expert',
    level : 'Expert'
  },
  {
  name : 'Java',
  level : ''
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
