import { Component, OnInit, Injectable } from '@angular/core';
import { Employee } from '../model/emplyee.model';
import { HttpClient} from '@angular/common/http'; //need for call api
import { Router } from '@angular/router';
import { CreateEmployeComponent } from './create-employe.component';
import { EmpDetailComponent } from '../emp-detail/emp-detail.component';
import { EmpServiceComponent } from '../emp-service/emp-service.component';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})

export class ListEmployeesComponent implements OnInit {
    newdata: any[];
  
    
   employees : Employee[]=[];
 
        getList(){
            this.httpClient.get('http://localhost:8080/Employee/getAll?type=gemp')
            .subscribe(
                (data: any[]) => {
                console.log(data);
                    this.newdata = data;
                }

            )
        }

  constructor(private httpClient : HttpClient,private router: Router,private service : EmpServiceComponent) {
    this.getList();
   
  }

  ngOnInit() {
    this.getList();
  }

  onItemClick(emp :Employee){

this.service.selectedEmployee=Object.assign({},emp);
    this.router.navigate(['create']);
   //this.create.onItemClickEdit(JSON.stringify(this.create.selectemp));


  }

}
