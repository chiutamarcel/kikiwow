import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface Realm {
  name: string,
  expansion: string,
  population: number
}

@Component({
  selector: 'app-realms',
  standalone: true,
  imports: [NgFor],
  templateUrl: './realms.component.html'
})

export class RealmsComponent {
  realms: Realm[];

  constructor() {
    this.realms = [
      {name:"Morpheus", expansion:"Wrath of the Lich King", population:1000},
      {name:"Virgo", expansion:"Cataclysm", population:500},
      {name:"Sagitarius", expansion:"Legion", population:1556},
      {name:"Leonidas", expansion:"Wrath of the Lich King", population:2000},
      {name:"Wukong", expansion:"Mists of Pandaria", population:3500},
    ]
  }
}
