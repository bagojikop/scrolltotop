import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  entity:Person;
  employee:Employee;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.entity=<Person>{};
    this.employee=<Employee>{}

      this.entity={
        name:'Anil Devaki',
        age:45
      }
    
      // this.employee.age 

    console.log(this.entity.age);
  }
  
  login() {
    this.router.navigate(['home']);

    const obj = { name: 'Abcd', ss: 'someValue' };
    const { name, ss } = obj;
  }
}
