import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Johnson Clark Wedding!';

  constructor(
      private router:Router) {

  }

  ngOnInit() {
    this.router.events
      .filter(e => e instanceof RoutesRecognized)
      .pairwise()
      .subscribe((e: any[]) => {
        //console.log(e);
      });
    this.router.events.pairwise().subscribe((e) => {
            //console.log(e);
    })
  }
}

@Component({
  selector: '',
  templateUrl: './slider.component.html',
  styleUrls: ['./app.component.css']
})
export class SliderComponent {
  title = 'Johnson Clark Wedding!';
}
