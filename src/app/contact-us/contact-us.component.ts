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

      meta.addTags([
        { name: 'author', content: 'Jez Reel' },
        { name: 'keywords', content: 'angular seo, angular 4 universal, sagenic, tech talk tuesday, contact us, applications' },
        { name: 'description', content: data.body }
      ]);

    });

  }

  ngOnInit() {

  }

}
