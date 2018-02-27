import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import {InterceptorModule} from './interceptor.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeComponent } from './employees/create-employe.component';

//This code for rout the request lis
const appRoutes : Routes =
[
  { path:'home',component:AppComponent},
  { path:'list',component:ListEmployeesComponent},
  { path:'create',component:CreateEmployeComponent},
  { path:'',redirectTo:'list',pathMatch:'full'}
]   
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
