import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  constructor(meta: Meta, public title: Title) {

    title.setTitle('Sagenic | Our Services');

    meta.addTags([
      { name: 'author', content: 'Jez Reel' },
      { name: 'keywords', content: 'Web Development, Branding and Design, Mobile Development, Desktop Applications' },
      { name: 'description', content: 'Here at Sagenic we offer different services such as Web Development and Branding and Design.' }
    ]);

  }

  ngOnInit() {
  }

}
