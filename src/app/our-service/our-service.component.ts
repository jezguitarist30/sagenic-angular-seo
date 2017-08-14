import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  constructor(meta: Meta, public title: Title) {

    const pageTitle = 'Sagenic | Our Services';

    meta.updateTag({ name: 'keywords', content: 'Web Development, Branding and Design, Mobile Development, Desktop Applications' });
    meta.updateTag({ name: 'description', content: 'Here at Sagenic we offer different services such as Web Development and Branding and Design.' });
    meta.updateTag({ property: 'og:title', content: pageTitle });
    meta.updateTag({ property: 'og:description', content: 'Here at Sagenic we offer different services such as Web Development and Branding and Design.' });
    meta.updateTag({ property: 'og:image', content: 'http://edynamique.com/portals/0/MagenicPhoto.JPG' });

  }

  ngOnInit() {
  }

}
