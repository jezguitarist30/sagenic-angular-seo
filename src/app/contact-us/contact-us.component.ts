import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ContactUsService, Post } from './contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(meta: Meta, title: Title, contactService: ContactUsService) {

    contactService.getPost().subscribe((data: Post) => {

      title.setTitle(data.title);

      meta.updateTag({ name: 'keywords', content: 'angular seo, angular 4 universal, sagenic, tech talk tuesday, contact us, applications' });
      meta.updateTag({ name: 'description', content: data.body });
      meta.updateTag({ property: 'og:title', content: data.title });
      meta.updateTag({ property: 'og:description', content: data.body });
      meta.updateTag({ property: 'og:image', content: 'https://media.licdn.com/media/AAEAAQAAAAAAAAdxAAAAJDY5OTE0ZmVjLWVmZDItNGIyMy05NjU2LTk5NmZmMzYzYTNlNA.png' });

    });

  }

  ngOnInit() {

  }

}
