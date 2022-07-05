import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string;

  @Output() messageEvent = new EventEmitter<string>();

  nachricht = 'Signal von Child';

  constructor() { }

  ngOnInit() {}

  sendMessage(){
    this.messageEvent.emit('Ping von Child wurde gesendet!');
  }

}
