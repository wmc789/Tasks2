import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quersumme',
  templateUrl: './quersumme.page.html',
  styleUrls: ['./quersumme.page.scss'],
})
export class QuersummePage implements OnInit {

  inputNum = 0;
  qSum = 0;

  constructor() { }

  ngOnInit() {
    this.sumDigits(this.inputNum);
  }

  /**
   * while(inputNum) {
    this.qSum += inputNum % 10;
    inputNum = Math.floor(inputNum / 10);
    }
   *
   */

  sumDigits(inputNum) {

    while (inputNum) {
        this.qSum = inputNum % 10;
        inputNum = (inputNum - this.qSum) / 10;
    }
    return this.qSum;
  }

}
