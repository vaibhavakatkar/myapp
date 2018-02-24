import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department }  from '../model/department.model'

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
  constructor() { 
    this.datepickerConfig= Object.assign({},{containerClass:"theme-dark-blue"})
  }
  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }

  ngOnInit() {
  }

  saveEmployee(empForms :NgForm) : void{
    console.log(empForms.value);
  }

}
