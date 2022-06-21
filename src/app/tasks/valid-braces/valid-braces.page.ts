
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valid-braces',
  templateUrl: './valid-braces.page.html',
  styleUrls: ['./valid-braces.page.scss'],
})
export class ValidBracesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isValid;

  braces = '{}{';

  checkBraces(){

    if(this.braces.includes(('{' && '}' )||( '(' && ')' )||( '[' && ']'))){
      this.isValid = true;
    }
    else{
      this.isValid = false;
    }


    console.log(this.isValid);
  }
}


/**
 * Write a function that takes a string of braces, and determines if the order of the braces is valid.
 * It should return true if the string is valid, and false if it's invalid.
 * This Kata is similar to the Valid Parentheses Kata,
   but introduces new characters: brackets [], and curly braces {}.
All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
 */
