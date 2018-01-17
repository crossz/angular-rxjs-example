import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }


  getMessage() {
    return Observable.of("this is a string message.")
    // return this.http
    //     .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
    //     .map(res => res.json())
  }


}
