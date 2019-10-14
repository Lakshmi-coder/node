import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students=[
    {id:1,sname:"anil",course:"Angular",fee:1000},
    {id:2,sname:"carishma",course:"C",fee:8000},
    {id:3,sname:"jhanu",course:"Java",fee:8700},
    {id:4,sname:"sindhu",course:"Html",fee:9000}
 
  ];

  constructor() { }
}
