import { Component, OnInit } from '@angular/core';
import { IIngredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[] = [
    new IIngredient('Apple', 4),
    new IIngredient('Orange', 5)
  ];

  constructor() {}

  ngOnInit() {}
}
