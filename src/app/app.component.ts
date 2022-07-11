import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'accumulate-string', url: 'accumulate-string', icon: 'document' },
    { title: 'valid-braces', url: 'valid-braces', icon: 'document' },
    { title: 'chocolate-task', url: 'chocolate-task', icon: 'document' },
    { title: 'quersumme', url: 'quersumme', icon: 'document' },
    { title: 'data-to-child', url: 'data-to-child', icon: 'document' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}










//CW Aufgabe


//string.split([separator][, limit]);

/*
function reverseString(s){

return s.split("").reverse().join("");

}

reverseString("Hello");//"olleH"


export function reverseWords(str: string): string {

// your code here



reverseString('The quick brown fox jumps over the lazy dog.')

console.log(reverseString.reverse(('The quick brown fox jumps over the lazy dog.')))



function reverseString(str: string){

str.split(" ")

for(let i = 0; i < str.length; i++){

str.reverse().join(" ")


}



}

return "Go for it";

}


/**

let charArray: string[] = toBeReversed.split('');

console.log(charArray);


let reverseArray: string[] = charArray.reverse();

console.log(reverseArray);


Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples


"This is an example!" ==> "sihT si na !elpmaxe"

"double spaces" ==> "elbuod secaps"


*/


//export function reverseWords(str: string): string {

// your code here



/*let reverseString = ('The quick brown fox jumps over the lazy dog.')

console.log(reverseString('The quick brown fox jumps over the lazy dog.'))



let charArray: string[] = reverseString.split('');

console.log(charArray);


let reverseArray: string[] = charArray.reverse();

console.log(reverseArray);


let reversedArray: string = reverseArray.join('');

console.log(reversedArray);



return "Go for it";

}*/
