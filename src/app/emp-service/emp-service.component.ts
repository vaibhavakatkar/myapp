import { Component, OnInit, Injectable } from '@angular/core';
import { Employee } from '../model/emplyee.model';

@Component({
  selector: 'app-emp-service',
  templateUrl: './emp-service.component.html',
  styleUrls: ['./emp-service.component.css']
})

@Injectable()
export class EmpServiceComponent implements OnInit {

  selectedEmployee : Employee;


  constructor() { }

  ngOnInit() {
  }

}
