import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department }  from '../model/department.model'
import { HttpClient} from '@angular/common/http'; //need for call api

import { BsDatepickerConfig }  from 'ngx-bootstrap/datepicker'
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeComponent implements OnInit {
  previewPhoto=false;
  datepickerConfig : Partial<BsDatepickerConfig>;
  departments : Department[] = [
    {id:1,name:"Help Desk"},
    {id:2,name:"HR"},
    {id:3,name:"IT"},
    {id:4,name:"Paroll"}];

    isActive=true;
  constructor(private httpClient : HttpClient) { 
    this.datepickerConfig= Object.assign({},{containerClass:"theme-dark-blue"})
  }
  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }

  ngOnInit() {
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

  saveEmployee(empForms :NgForm){
    this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
    {
      name:empForms,
      age: 41
    })
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

    
}
