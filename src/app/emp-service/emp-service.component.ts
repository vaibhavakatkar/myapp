import { Component, OnInit, Injectable } from '@angular/core';
import { Employee } from '../model/emplyee.model';
import { HttpClient, HttpHeaders} from '@angular/common/http'; //need for call api
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Jsonp } from '@angular/http';
import { EmpDetailComponent } from '../emp-detail/emp-detail.component';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};
@Component({
  selector: 'app-emp-service',
  templateUrl: './emp-service.component.html',
  styleUrls: ['./emp-service.component.css']
})

@Injectable()
export class EmpServiceComponent implements OnInit {
  Insertdata:any;                                                                                           
  selectedEmployee : Employee;
  selectedEmp;
  data;

  EmpName: any;

  constructor(private httpClient : HttpClient,private router: Router) { 
    
  }

  getEmpByName(EmpName): Observable<any>{
  
 return this.httpClient.get('http://localhost:8080/Employee/getGempByName?type=gempname&name='+EmpName+'', {responseType: 'text'});

}


  saveLoginDetails(body){
  
    this.httpClient.post(`http://localhost:8080/Employee/submit?type=logindetails`,
    body, httpOptions)
    .subscribe(
      (data) => {
       // console.log(data);
        
      }
    
    )
///this.router.navigate(['']);
  }
  






  ngOnInit() {
  }

}
