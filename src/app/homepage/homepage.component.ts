import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface NewsItem{
  id:number;
  description:string;
};

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {
  news: NewsItem[];

  constructor() {
    this.news = [];

    let phText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
                  In odit qui sunt autem iure non quod suscipit eius, a cumque laborum ex, \
                  atque dolore neque. Eum recusandae officiis possimus dignissimo.";

    for (let i = 0; i < 10; i++) {
      this.news.push({ id:i, description:phText });
    }
  }
}
