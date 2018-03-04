import { Component, OnInit } from '@angular/core';
import { EmpServiceComponent } from '../emp-service/emp-service.component';
import { Employee } from '../model/emplyee.model';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { EmpLoginListComponent } from './emp-login-list/emp-login-list.component';
import { Router } from '@angular/router';
import { LoginDetails } from '../model/logindetais.model';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})


export class EmpDetailComponent implements OnInit {
  circularObj;
  Username;
 fullname;
  obsTextMsg: Observable<string>
  emplist : Employee;
  login: any;
  logout: any;
  total: any;
  formatsDateTest: string[] = [
    'dd/MM/yyyy',
    'dd/MM/yyyy hh:mm:ss',
    'dd-MM-yyyy',
    'dd-MMM-yyyy HH:mm:ss',
    'MM/dd/yyyy',
    'MM/dd/yyyy hh:mm:ss',
    'yyyy/MM/dd',
    'yyyy/MM/dd HH:mm:ss',
    'dd/MM/yy',
    'dd/MM/yy hh:mm:ss',
  ];
  formatsDate: string[] = [
    'dd/MM/yyyy hh:mm:ss',
  ];
  formatsMonth: string[] = [
    'MMM',
  ];


  //dateNow : Date = new Date();
  //dateNowISO = this.dateNow.toISOString();
  Login() {
   
    let dateNow: Date = new Date();
    let dateNowMilliseconds = dateNow;

    this.login = dateNowMilliseconds;
    
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Login Time is Thank you sir Have a nice Day "));
  }
  Logout() {
    let dateNow: Date = new Date();
    let dateNowMilliseconds = dateNow;
    const now = Date.now();
    this.logout = dateNowMilliseconds;

    let diffInMs: number = Date.parse(this.logout) - Date.parse(this.login);
    let diffInHours: number = diffInMs / 1000 / 60 / 60;

    let dd, hr, min, sec;

    let datepart = 'h';
    var diff = this.logout - this.login;
    var divideBy = {
      w: 604800000,
      d: 86400000,
      h: 3600000,
      n: 60000,
      s: 1000
    };
    dd = Math.floor(diff / divideBy['d']);
    hr = Math.floor(diff / divideBy['h']);
    min = Math.floor(diff / divideBy['n']);
    sec = Math.floor(diff / divideBy['s']);
    this.total = "Day : " + dd +" Hrs : " + hr+' Min : ' + min + ' Sec : ' + sec;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('Logout Time is '+hr+'hars'+min+"minit"+sec+"Second     Thank you Sir"));
    this.Username;
    this.login;
    let body = {
      "userName" : this.emplist.fullname,
      "loginTime" :this.login,
     "logoutTime" :this.logout,
      "total" : hr+":"+min+":"+sec,
     "month" :dateNow.getMonth(),
      "year" : dateNow.getFullYear(),
     
      "day" : dateNow.getUTCDate()
  };
  
    this.servie.saveLoginDetails(body);
  }
  constructor(private router: Router,private servie : EmpServiceComponent,private httpClient : HttpClient,private logindetail : EmpLoginListComponent) {
  this.Username="Vaibhav";
  this.httpClient.get('http://localhost:8080/Employee/getGempByName?type=gempname&name='+this.Username+'')
  .subscribe(
      (data: any) => {

          console.log(data);
          
          this.emplist=data;
          
      }

  )
   } 
 



  ngOnInit() {
    
  }




  onItemClick(emplist){

    this.servie.emplist=Object.assign({},this.emplist);
  alert(JSON.stringify(this.emplist))
    // this.logindetail.emplist=Object.assign({},this.emplist);
    // this.logindetail.listEmpDetail(this.emplist);
    this.router.navigate(['login-detal']);
  }

}
