import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-content-view-model',
  templateUrl: './content-view-model.component.html',
})
export class ContentViewModelComponent implements OnInit {

  @Input() content: string | undefined;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.content = this.route.snapshot.data.content;
  }
}
