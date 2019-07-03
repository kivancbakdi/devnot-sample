import { Component, OnInit } from '@angular/core';
import { EmployeeApi } from '../api/employee.api';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  // {"name":"test","salary":"123","age":"23","id":"719"}

  employeeForm: FormGroup
  response: string

  constructor(private employeeApi: EmployeeApi,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createEmployeeForm()
  }

  createEmployeeForm() {

    this.employeeForm = this.formBuilder.group({
      name: [''],
      salary: [''],
      age: ['']
    })

  }

  submit() {

    this.employeeApi.create(this.employeeForm.value).subscribe(response =>{
      this.response = JSON.stringify(response)
    })

  }

}
