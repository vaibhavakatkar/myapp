import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})


export class EmpDetailComponent implements OnInit {

  login: any;
  logout: any;
  total: any;
  formatsDateTest: string[] = [
    'dd/MM/yyyy',
    'dd/MM/yyyy hh:mm:ss',
    'dd-MM-yyyy',
    'dd-MM-yyyy HH:mm:ss',
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



  //dateNow : Date = new Date();
  //dateNowISO = this.dateNow.toISOString();
  Login() {

    let dateNow: Date = new Date();
    let dateNowMilliseconds = dateNow;

    this.login = dateNowMilliseconds;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('Login Time is '+ this.login+"Thank you sir Have a nice Day "));
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
 
  }
  constructor() { } 

  ngOnInit() {
  }

}
