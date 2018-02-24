import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeComponent } from './employees/create-employe.component';
const appRoutes : Routes =
[
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
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
