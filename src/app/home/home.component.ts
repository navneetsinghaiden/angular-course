import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount:number=0;
  buttonText : string = "Add an Item";
  addtext:string='Enter Goals';
  goals = [];

  constructor() { }

  ngOnInit() {
  }

  addItem(){
  console.log("Inside Add item");
  this.goals.push(this.addtext);
  this.itemCount++;
  console.log(this.goals);
  }

}
