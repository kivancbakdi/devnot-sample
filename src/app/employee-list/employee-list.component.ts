import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

//Apis
import { EmployeeApi } from '../api/employee.api'

//Models
import { Employee } from '../models/employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]
  searchTerm: string

  constructor(private employeeApi: EmployeeApi,
    private router: Router) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {

    this.employeeApi.getAll().subscribe((response: Employee[]) => {
      this.employees = response
    }, (err) => {
      console.error('hata!')
    })

  }

  showDetails(employee: Employee) {
    this.router.navigate(['employees/by/', employee.id])
  }

  searchTermChanged() {
    console.log(this.searchTerm)
  }

}
