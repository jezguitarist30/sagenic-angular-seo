import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    const pageTitle = 'Sagenic | About Us Page';

    title.setTitle(pageTitle);

    meta.addTags([
      { name: 'author', content: 'Jez Reel' },
      { name: 'keywords', content: 'angular seo, angular 4 universal, sagenic, tech talk tuesday, about us, applications' },
      { name: 'description', content: 'We are a group of developers whos passionate about building world class Application.' },
      { name: 'fb:app_id', content: '1560442157353717' },
      { name: 'og:title', content: pageTitle },
      { name: 'og:site_name', content: 'Sagenic' },
      { name: 'og:description', content: 'We are a group of developers whos passionate about building world class Application.' },
      { name: 'og:image', content: 'https://media.licdn.com/media/AAEAAQAAAAAAAAdxAAAAJDY5OTE0ZmVjLWVmZDItNGIyMy05NjU2LTk5NmZmMzYzYTNlNA.png' }
    ]);

  }

  ngOnInit() {
  }

}
