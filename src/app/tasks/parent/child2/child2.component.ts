import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {

  @Output() pingEvent = new EventEmitter<string>();

  ping: string = 'Ping von Child erhalten!';

  constructor() { }
  
  sendPing(){
    this.pingEvent.emit(this.ping);
  }

  ngOnInit() {}

}
