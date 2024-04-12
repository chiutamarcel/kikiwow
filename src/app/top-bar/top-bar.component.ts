import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app.routes';
import { NgFor, TitleCasePipe } from '@angular/common';

export const barItems: string[] = [
  "shop",
  "rules",
  "realms",
  "database"
];

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [NgFor, RouterModule, TitleCasePipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  barItems = barItems;
}
