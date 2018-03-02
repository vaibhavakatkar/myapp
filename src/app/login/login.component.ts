import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
   debugger;
    if(this.model.username=='admin' && this.model.password=='admin')
    {
     // this.router.navigate([this.returnUrl]);
     this.router.navigate(['list']);
     
    }
    else
    {
      this.loading = false;
      this.router.navigate(['login']);
    }

     if (this.model.username=='vaibhav' && this.model.password=='vaibhav' && this.model.username!='admin') {
      this.loading = true;
      this.router.navigate(['detail']);
     }

  }

}
