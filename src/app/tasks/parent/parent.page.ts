import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../data-to-child/child/child.component';
//import * as EventEmitter from 'events';
import { Child2Page } from './child2/child2.page';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {

  @ViewChild(Child2Page) child2;

  //clickEvent = new EventEmitter<boolean>();

  //clicked = false

  constructor() { }

  ngOnInit() {
  }


}
