import { Component } from '@angular/core'
import {HelloService} from './hello.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HelloService]
  })
export class AppComponent {
  employees:Employee[];
  x:any={};
  url:string='http://localhost:3000/employees';
  constructor(private _http:HttpClient){
    this._http.get<Employee[]>(this.url)
    .subscribe(data => this.employees = data );
   }
   selectRow(id:number){
     this._http.get<Employee>(`${this.url}/${id}`)
     .subscribe(row => this.x = row);
   }
}
  
  class Employee{
    id:number
    ename:string
    job:string
    salary:number
  }



  
  
