import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { InterceptorModule } from './interceptor.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeComponent } from './employees/create-employe.component';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpServiceComponent } from './emp-service/emp-service.component';
import { EmpLoginListComponent } from './emp-detail/emp-login-list/emp-login-list.component';

//This code for rout the request lis
const appRoutes: Routes =
  [
    //{ path:'base',component:BaseComponent},
    { path: 'login-detal', component: EmpLoginListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'detail', component: EmpDetailComponent },
    {
      path: 'list', component: BaseComponent,
      children: [{ path: '', component: ListEmployeesComponent }]
    },
    {
      path: 'create', component: BaseComponent,
      children: [{ path: '', component: CreateEmployeComponent }]
    },
    { path: 'list/list', redirectTo: 'list' },
    { path: 'create/list', redirectTo: 'list' },
    { path: 'list/create', redirectTo: 'create' },
    { path: 'create/create', redirectTo: 'create' },
    { path: '', redirectTo: 'login', pathMatch: 'full' }

 

  ]
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeComponent,
    LoginComponent,
    BaseComponent,
    EmpDetailComponent,
    EmpLoginListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //  InterceptorModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    InterceptorModule
  ],
  providers: [CreateEmployeComponent, EmpServiceComponent,EmpLoginListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
