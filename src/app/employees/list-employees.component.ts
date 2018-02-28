import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/emplyee.model';
import { HttpClient} from '@angular/common/http'; //need for call api
import { Router } from '@angular/router';

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

  constructor(private httpClient : HttpClient,private router: Router) {
    this.getList();
  }

  ngOnInit() {
  }

  onItemClick(emp : any[]){
    this.router.navigate(['detail']);


  }

}
