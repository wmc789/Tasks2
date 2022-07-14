import { Component, OnInit, Output } from '@angular/core';  //Input,Output, View ????
import * as EventEmitter from 'events';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.page.html',
  styleUrls: ['./child2.page.scss'],
})
export class Child2Page implements OnInit {

  @Output() outputEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /*getClick(){
    console.log('Test');
    this.clicked = true;

    if(this.clicked === true){
      console.log(this.clicked);
      console.log('Test if loop');
    }
  }*/

  sendMsg(){
    this.outputEvent.emit();
  }

}


