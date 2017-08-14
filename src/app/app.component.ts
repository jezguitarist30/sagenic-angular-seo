import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(meta: Meta, title: Title) {

    const pageTitle = 'Sagenic | Home Page';

    title.setTitle(pageTitle);

    meta.addTags([
      { name: 'author', content: 'Jez Reel' },
      { property: 'fb:app_id', content: '1560442157353717' },
      { property: 'og:title', content: pageTitle },
      { property: 'og:site_name', content: 'Sagenic' },
      { property: 'og:image', content: 'https://media.licdn.com/media/AAEAAQAAAAAAAAdxAAAAJDY5OTE0ZmVjLWVmZDItNGIyMy05NjU2LTk5NmZmMzYzYTNlNA.png' }
    ]);
  }
}
