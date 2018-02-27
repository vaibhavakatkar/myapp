import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/emplyee.model';
import { HttpClient} from '@angular/common/http'; //need for call api

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
    newdata: any[];
    name: any;
    uuid:any;
    version :any;
    desc:any;
    joindate:any;
    skill:any;
    active:any;
    
   employees : Employee[]=[
    {   id:1,
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
                photopath:"assets/images/goodEmployee1.png"} ];
       

        
        getList(){
            this.httpClient.get('http://localhost:8080/Employee/getAll?type=employee')
            .subscribe(
                (data: any[]) => {

                    console.log(data);
                    this.newdata = data;
                }

            )
        }

  constructor(private httpClient : HttpClient) {}

  ngOnInit() {
  }

}
