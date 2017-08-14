import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    const pageTitle = 'Sagenic | Home Page';

    title.setTitle(pageTitle);

    meta.updateTag({ name: 'keywords', content: 'angular seo, angular 4 universal, sagenic, tech talk tuesday' });
    meta.updateTag({ name: 'description', content: 'This is my Angular SEO-based App, Home Page!' });
    meta.updateTag({ property: 'og:title', content: pageTitle });
    meta.updateTag({ property: 'og:description', content: 'This is my Angular SEO-based App, Home Page!' });
    meta.updateTag({ property: 'og:image', content: 'https://media.licdn.com/media/AAEAAQAAAAAAAAdxAAAAJDY5OTE0ZmVjLWVmZDItNGIyMy05NjU2LTk5NmZmMzYzYTNlNA.png' });

  }

  ngOnInit() {
  }

}
