import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-accumulate-string',
  templateUrl: './accumulate-string.page.html',
  styleUrls: ['./accumulate-string.page.scss'],
})
export class AccumulateStringPage implements OnInit {

  
  //private myString = '';
  inputString = '';
  outputString = '';

  exampleString = 'abcd';

  constructor() { }

  ngOnInit() {
    /*const changedString = this.changeMyString('abcDsTOLLllllap');
    console.log('changedString: ', changedString);*/
  }


  //@Input() item = 'Test-Input'; // decorate the property with @Input()


  changeMyString( str: string ){

    console.log('str: ', str);

    let result = '';

    for(let i = 0; i < str.length; i++){

      result += str.toUpperCase().charAt(i);
      result += str.toLowerCase().charAt(i).repeat(i);
      result += '-';

    }
    result = result.slice(0, -1);

    this.outputString = result;

 }
}
