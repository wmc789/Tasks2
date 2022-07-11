import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {

  @Output() incrementEvent = new EventEmitter<string>();
  @Output() decrementEvent = new EventEmitter<number>();

  nachricht = 'Signal von Child';

  //clicks = 0;

  constructor() { }

  ngOnInit() {}
  /*
  clickCount(){
    this.incrementEvent.emit();
    this.decrementEvent.emit();
  }
  */
  clickIncrement(){
    this.incrementEvent.emit();
  }
  clickDecrement(){
    this.decrementEvent.emit();
  }
}
