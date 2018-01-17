import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Rx';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rxjs Demo';


  

  constructor(
    // @Inject('todoService') private service,
    private route: ActivatedRoute,
    private router: Router) {
      this.title = 'hello world.';


      console.log(this.route.params)
      // get param method 1
      console.log(this.route.snapshot.paramMap.get('filter')); 
      // get param method 2
      this.route.paramMap.subscribe(  
        params => {
          this.title = params.get('filter');
          console.log(this.title);
        }
      );

    
  


      // Observable.from(this.route.params)
      this.route.params
      ._do( val => console.log(val))
        .pluck('filter')
        .subscribe(filter => {
          console.log(filter);
        })
  


    }

  ngOnInit() {

  }  
}
