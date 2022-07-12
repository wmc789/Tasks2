import { Component, OnInit, ViewChild } from '@angular/core';
import { Child2Page } from './child2/child2.page';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {

  @ViewChild(Child2Page) child2;
  
  clicked = false;

  if(clicked = true){
    
  }

  constructor() { }

  ngOnInit() {
  }


}
