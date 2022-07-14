import { Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {

  @ViewChild(Child2Component) child;

  ping = 'Placeholder';

  constructor() { }

  getPing(ping: string){
    this.ping = ping;
  }

  ngOnInit() {
  }


}
