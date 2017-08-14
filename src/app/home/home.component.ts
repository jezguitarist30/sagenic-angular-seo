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

    meta.addTags([
      { name: 'author', content: 'Jez Reel' },
      { name: 'keywords', content: 'angular seo, angular 4 universal, sagenic, tech talk tuesday' },
      { name: 'description', content: 'This is my Angular SEO-based App, Home Page!' },
      { name: 'fb:app_id', content: '1560442157353717' },
      { name: 'og:title', content: pageTitle },
      { name: 'og:site_name', content: 'Sagenic' },
      { name: 'og:description', content: 'This is my Angular SEO-based App, Home Page!' },
      { name: 'og:image', content: 'https://media.licdn.com/media/AAEAAQAAAAAAAAdxAAAAJDY5OTE0ZmVjLWVmZDItNGIyMy05NjU2LTk5NmZmMzYzYTNlNA.png' }
    ]);
  }

  ngOnInit() {
  }

}
