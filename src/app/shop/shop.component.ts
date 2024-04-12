import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface Product {
  img: string,
  title: string,
  category: string,
  description: string,
  price: number
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  products: Product[];

  constructor() {
    this.products = [
      {
        img: "assets/img/product_dreamweaver.avif",
        title: "Dreamweaver",
        category: "Mount",
        description: "A splendid dreamweaver to take you on a dream journey!",
        price: 250
      },
      {
        img: "assets/img/product_fey_dragon.avif",
        title: "Fey Dragon",
        category: "Mount",
        description: "Fabulous fey dragon from the mystical fairies land",
        price: 125
      },
      {
        img: "assets/img/product_skull_bonfire.avif",
        title: "Skull Bonfire",
        category: "Toy",
        description: "SpooOOoOky!",
        price: 15
      },
      {
        img: "assets/img/product-murkmorpher.avif",
        title: "Murkmorpher",
        category: "Toy",
        description: "Morph your friends into a murloc. Hehe...",
        price: 10
      },
    ];
  }
  
}
