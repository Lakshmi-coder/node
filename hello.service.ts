import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  sayHello(name){
    return `Hello ${name} from service`;
  }
wishes(){
  var d = new Date();
  if ( d.getHours()<12) return "Good Morning!";
  else if ( d.getHours()<16) return "Good Afternoon!";
}
  constructor() { }
}
