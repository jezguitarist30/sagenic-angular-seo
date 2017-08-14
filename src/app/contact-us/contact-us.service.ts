import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Post {
  public title: string;
  public body: string;
}

@Injectable()
export class ContactUsService {

  constructor(public http: Http) { }

  getPost(): Observable<Post> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .map(res => res.json());
  }
}
