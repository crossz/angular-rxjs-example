import { Component, Inject, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { TodoService } from './services/todo.service';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rxjs Demo';

  constructor(
    @Inject( TodoService ) private service,
    ) {
      this.title = 'hello world.';
    }


    ngOnInit() {
      this.service.getMessage()
          .subscribe(data => {
              if (data) {
                this.title = data[0].login;
                console.log(data[0]);
              }
          });
    }

}
