import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department }  from '../model/department.model'
import { HttpClient, HttpHeaders} from '@angular/common/http'; //need for call api
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";

//import { Http, Headers, RequestOptions,Response} from '@angular/http';// set header
import { BsDatepickerConfig }  from 'ngx-bootstrap/datepicker'
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Observer } from 'rxjs/Observer';
import { Router } from '@angular/router';
import { ListEmployeesComponent } from './list-employees.component';
import { Employee } from '../model/emplyee.model';
import { EmpServiceComponent } from '../emp-service/emp-service.component';
//import { Observable } from 'rxjs/Observable';
const httpOptions = {
   headers: new HttpHeaders({'Content-Type':  'application/json'})
};
@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})

@Injectable()
export class CreateEmployeComponent implements OnInit {

Insertdata: any;
 email123 ="aaaaaaaaaaaaaaaaaaaaaaa";
// Name: any;
// email :any;
// phonnumber:any;
// gender:any;
// contactPrefernce:any;
selectedEmployee : Employee =new Employee();
//isActive:any;

  previewPhoto=false;
  datepickerConfig : Partial<BsDatepickerConfig>;
  departments : Department[] = [
    {id:1,name:"Help Desk"},
    {id:2,name:"HR"},
    {id:3,name:"IT"},
    {id:4,name:"Paroll"}];

    isActive=true;

    resetForm(employeeForm?: NgForm) {
      if (employeeForm != null)
      employeeForm.reset();
      this.employeeService.selectedEmployee = {
        id: null,
        fullname: '',
        gender: '',
        email: '',
        department: '',
        uuid:'',
        contactPrefernce: '',
         photo: '',
         dob:'',
         isActive:null,
         phoneNumer:null,

       
        
      }
    }
 

// fullname=this.selectemp.fullname;

// fullname1=this.selectemp.fullname;

  constructor(private httpClient : HttpClient,private router: Router,private employeeService: EmpServiceComponent) { 
    this.datepickerConfig= Object.assign({},{containerClass:"theme-dark-blue"})
    this.resetForm();
  }
  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }

  ngOnInit() {
    // this.Insertdata={};
    // this.email123 =JSON.stringify(this.selectemp.email);
    // console.log(this.email123)
   // console.log("new json"+JSON.stringify(this.emp.employees.values));
   //alert(this.email123)
  

  }

  // saveEmployee(empForms :NgForm) : void{
  //   this.httpClient.post(`localhost:8080/Employee/submit?type=employee`,
  //   {
  //     uuid:"sad",
  //     name:"indrajitkatkar@gmail.com",
  //     version:"sadweqqw",
  //     desc:"as",
  //     joindate:"qwqwcs",
  //     skill:"2014-10-06",
  //     active:"wqeqwd"})
  //   .subscribe(
  //     (data:NgForm) => {
  //       console.log(data);
  //     }
  //   )
 
  //  // console.log(empForms.value);
  // }

//   saveEmployee(empForms :NgForm){
//     console.log(empForms.value);
//     console.log(JSON.stringify(empForms.value));
   
//     this.headers=new Headers();
//     this.headers.append('content-type',"application/json");
//     this.httpClient.post(`http://localhost:8080/Employee/submit?type=employee`,
//     {
//       "uuid" : "VVVVV",
//       "version" : "sad",
//       "name" : "sada",
//       "desc" : "sad",
//       "joindate" : "asda",
//       "skill" : "2014-10-28",
//       "active" : "asd"
//   }
//     //  { headers : this.headers}
//  )

//     .subscribe(
//       (data:any) => {
//         console.log(data);
//       }
//     )
//   }



// saveEmployee(empForms :NgForm){
//   this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
//   {
//     name:'mark',
//     age: 41
//   })
//   .subscribe(
//     (data:any) => {
//       console.log(data);
//     }
//   )
// }
    


// saveEmployee(empForms :NgForm){
//   this.Insertdata = empForms.value;
  
   

// console.log(this.Insertdata);
//   let body = {
//     "uuid" : this.Insertdata.Name,
//     "version" :this.Insertdata.Name,
//    "name" :this.Insertdata.Name,
//   "desc" : this.Insertdata.Name,
//    "joindate" : this.Insertdata.Name,
//     "skill" : this.Insertdata.Name,
//     "active" :this.Insertdata.Name
// };
// alert(body);

//   this.httpClient.post(`http://localhost:8080/Employee/submit?type=employee`,
//   body, httpOptions)
//   .subscribe(
//     (data:any) => {
//       console.log(data);
//     }
//   )
// }
onItemClickEdit(selectedEmployee){
 debugger;
  //console.log(emp.fullname);
// this.Insertdata=emp;
//this.fullname="AAAAAAAAAAAAAAAAAa";
//console.log("emp"+emp+"select"+JSON.stringify(this.selectemp.email));

console.log(this.selectedEmployee.fullname);
//alert(this.email123)
//this.email123 =JSON.stringify(this.selectemp.email);
}

onKeyUp(){
 // alert(this.email123)
}




saveEmployee(empForms :NgForm){
  this.Insertdata = empForms.value;
  
   //debugger;

// console.log(this.Insertdata);
  let body = {
    "fullname" : this.Insertdata.Name,
    "email" :this.Insertdata.email,
   "phoneNumer" :this.Insertdata.phonnumber,
    "gender" : this.Insertdata.gender,
   "contactPrefernce" : this.Insertdata.contactPrefernce,
    "isActive" : this.Insertdata.isActive,
   
    "department" : this.Insertdata.department,
    "dob" :this.Insertdata.dob,
    "photo": this.Insertdata.photopath
};


  this.httpClient.post(`http://localhost:8080/Employee/submit?type=gemp`,
  body, httpOptions)
  .subscribe(
    (data:any) => {
     // console.log(data);
      
    }
  
  )
  this.router.navigate(['list']);
}

}
