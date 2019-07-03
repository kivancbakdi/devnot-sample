import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { EmployeeApi } from '../api/employee.api';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeId: string
  employeeForm: FormGroup
  response: string

  constructor(private activatedRoute: ActivatedRoute,
    private employeeApi: EmployeeApi, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      let employeeId = param.id

      if (employeeId) {
        this.employeeId = param.id
        this.getEmployee(employeeId)
      }

    })
  }

  getEmployee(id: string) {

    this.employeeApi.getById(id).subscribe((response: Employee) => {
      this.createEmployeeForm(response)
    }, (err) => {

    })

  }

  createEmployeeForm(employee: Employee) {

    this.employeeForm = this.formBuilder.group({
      name: [employee.employee_name],
      salary: [employee.employee_salary],
      age: [employee.employee_age]
    })

  }

  deleteEmployee() {
    this.employeeApi.delete(this.employeeId).subscribe(response => {
      this.response = JSON.stringify(response)
    })
  }

  submit() {
    this.employeeApi.update(this.employeeId, this.employeeForm.value).subscribe(response => {
      this.response = JSON.stringify(response);
    })
  }

}
