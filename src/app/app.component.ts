import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OutlineAssingment';
  constructor(){
    
//Task 11
let a1 = [{ a: 1, b: 'a', f: false }, { a: 2, b: 'b' }, { a: 3, c: 'c', f: 0 }];
a1.forEach((x: any) => {
  if (x.b == undefined) x.b = 'A';
  if (x.f == undefined) x.f = 'A';
  return x;
});
console.log('Task 11:-',a1)

//Task 12

const b1 = [{ a: 1, b: 'a' }, { a: 2, b: 'b' }, { a: 3, c: 'c' }];
let b2 = JSON.parse(JSON.stringify(b1)).map((x:any) => { x.a = x.a + 1; return x }); //will this change b1?
console.log('Task 12:-',b1, b2);
  }
}
