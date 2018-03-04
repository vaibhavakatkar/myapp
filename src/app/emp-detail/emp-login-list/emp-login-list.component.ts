import { Component, OnInit, Injectable } from '@angular/core';
import { LoginDetails } from '../../model/logindetais.model';
import { Employee } from '../../model/emplyee.model';
import { EmpServiceComponent } from '../../emp-service/emp-service.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emp-login-list',
  templateUrl: './emp-login-list.component.html',
  styleUrls: ['./emp-login-list.component.css'],
  host:{'[style.width.px]':' width '}
})

@Injectable()
export class EmpLoginListComponent implements OnInit {
emplist :Employee;
 logindetal : any[];     
 photo;           
 width: number;
day;


 getAllLogindetails()
 {
   debugger;
  this.httpClient.get('http://localhost:8080/Employee/getAllLogin?type=logindetails&name=Vaibhav')
  .subscribe(
      (data: any[]) => {
          this.logindetal = data;
          this.width=10;
          alert(JSON.stringify(this.logindetal))
      }
     )
 }
  constructor(private httpClient : HttpClient) {
    this.width = window.innerHeight;
    this.getAllLogindetails();
    alert("getlogin"+this.logindetal)
   }

  ngOnInit() {
    //alert(JSON.stringify(this.servie.emplist))
  
  }


  listEmpDetail(emplist)
  {
   // alert(JSON.stringify("in method"+this.servie.emplist))
   
  }



}
