import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food=>food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 3 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 2 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Paneer Tika',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/1.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/2.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: 'Pizza',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/3.png',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Pizza',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/4.png',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Sandwich',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/5.png',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Veg Burger',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/6.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'French Fries',
        price: 12,
        cookTime: '20-30',
        favorite: true,
        origins: ['Indian'],
        stars: 4.0,
        imageUrl: 'assets/7.png',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: 8,
        name: 'Noodels',
        price: 9,
        cookTime: '45-50',
        favorite: false,
        origins: ['indian'],
        stars: 4.0,
        imageUrl: 'assets/8.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 9,
        name: 'Pasta',
        price: 9,
        cookTime: '45-50',
        favorite: false,
        origins: ['indian'],
        stars: 4.0,
        imageUrl: 'assets/9.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
}
