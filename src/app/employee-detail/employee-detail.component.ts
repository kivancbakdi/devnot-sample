import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

//Apis 
import { EmployeeApi } from '../api/employee.api'
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee

  constructor(private activatedRoute: ActivatedRoute,
    private employeeApi: EmployeeApi, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {

      let employeeId = param.id

      if (employeeId) {
        this.getEmployeeDetail(employeeId);
      }

    })

    this.getEmployeeDetail(this.employee.id);
  }

  getEmployeeDetail(id: string) {
    this.employeeApi.getById(id).subscribe((response: Employee) => {
      this.employee = response
    }, (err) => {
      console.error('hata!')
    })
  }

  update() {
    this.router.navigate(['employees/update/', this.employee.id])
  }

}
