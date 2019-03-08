import { Component, OnInit } from '@angular/core';
import {Food} from '../food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  food : Food;

  foods = [];

  constructor() { }

  ngOnInit() {
  }

  add(name : string, category : string){
  this.food = new Food(name,category);
  this.foods.push(this.food);
  console.log(this.foods);
  }

}
