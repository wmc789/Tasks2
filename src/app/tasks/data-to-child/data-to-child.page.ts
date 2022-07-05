import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-data-to-child',
  templateUrl: './data-to-child.page.html',
  styleUrls: ['./data-to-child.page.scss'],
})
export class DataToChildPage implements OnInit {

  @ViewChild(ChildComponent) child;

  constructor() { }

  ngOnInit() {
  }

  /*ngAfterViewInit() {
    alert(this.child.nachricht);
  }*/

  recieveMessage(msg){
    alert(msg);
  }
}
