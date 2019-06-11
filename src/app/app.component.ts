import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private localize: LocalizeRouterService) {
    console.log('ROUTES', this.localize.parser.routes);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
