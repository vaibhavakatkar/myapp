import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/emplyee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
   employees : Employee[]=[{
      id:1,
      name:"Jhon",
      gender:"male",
      email:"vkg@gmail.com",
      phonenumber:123548481513,
      contact:"sadsad",
      dob:new Date('11/20/1991'),
      department:"java",
      isActive:true,
      photopath:"assets/images/goodEmployee1.png"},
  {
      id:2,
      name:"mark",
      gender:"male",
      email:"vkg@gmail.com",
      phonenumber:123548481513,
      contact:"sadsad",
      dob:new Date('11/20/1991'),
      department:"java",
      isActive:true,
      photopath:"assets/images/employee.png"},
  {
      id:3,
      name:"Rock",
      gender:"male",
      email:"vkg@gmail.com",
      phonenumber:123548481513,
      contact:"sadsad",
      dob:new Date('11/20/1991'),
      department:"java",
      isActive:true,
      photopath:"assets/images/goodEmployee1.png"},
   ];
   

  constructor() {}

  ngOnInit() {
  }

}
