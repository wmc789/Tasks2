import { Component, OnInit } from '@angular/core';  //Input,Output, View ????

@Component({
  selector: 'app-child2',
  templateUrl: './child2.page.html',
  styleUrls: ['./child2.page.scss'],
})
export class Child2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendMsg(){
    let msg = 'Ping von Child';
  }

}
