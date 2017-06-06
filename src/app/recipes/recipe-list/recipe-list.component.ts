import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  resipes: Recipe[] = [
    new Recipe('My Recipe 1','This is Test Recipe One', 'http://www.foodtolove.com.au/assets/images/badge-collection.png'),
    new Recipe('My Recipe 2','This is Test Recipe Two', 'http://www.foodtolove.com.au/assets/images/badge-collection.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
