import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: IRecipe[] = [
    new IRecipe(
      'Test name recipe',
      'simple test',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'
    ),
    new IRecipe(
      'Test name recipe',
      'simple test',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'
    ),
    new IRecipe(
      'Test name recipe',
      'simple test',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
